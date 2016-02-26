var async = require('async');


// Waterline collections will go here
var collections;


/**
 * Load all data fixtures on the list in parallel
 *
 * @param array    queue_list List of all fixtures with data
 * @param function next       Standard async callback that id passed an error as first argument. `next(err)`
 */
var process_all = function(queue_list, next)
{
	var jobs = [];

	for (var i = 0; i < queue_list.length; i++) {
		jobs.push(prepare_fixture_job(queue_list[i]));
	}

	async.parallel(jobs, function(next) {
		return function(err, result) {
			if (err) {
				throw err;
			} else {
				next(err);
			}
		};
	}(next));
};


/**
 * Create fixture job for async that loads all model data of a fixture into db.
 *
 * @param array fixture Array/list of models to load
 * @return function(next) Where next is a callback to be passed
*/
var prepare_fixture_job = function(fixture)
{
	return function(fixture) {
		return function(next) {
			var jobs = [];

			for (var i = 0; i < fixture.length; i++) {
				jobs.push(prepare_model_job(fixture[i]));
			}

			async.series(jobs, next);
		};
	}(fixture);
};


/**
 * Create model job for async that loads data/rows of a model into db.
 *
 * @param object model_def Plain object containing model name and items data
 * @return function(next) Where next is a callback to be passed
 *
 */
var prepare_model_job = function(model_def)
{
	return function(model_def) {
		return function(next) {
			var
				name  = model_def.model.toLowerCase(),
				items = model_def.items,
				jobs  = [],
				model;

			if (typeof collections[name] == 'object') {
				model = collections[name];

				for (var i = 0; i < items.length; i++) {
					jobs.push(prepare_model_instance_job(model, items[i]));
				}

				async.series(jobs, next);
			} else {
				next('Model "' + name + '" does not exist');
			}
		};
	}(model_def);
};


/**
 * Create model instance job for async that runs for individual data rows. If id
 * is passed, check db for existence and update/create record. If not, data is
 * simply created.
 *
 * @param object model Waterline model (static)
 * @param object data  Plain object containing instance attr data
 * @return function(next) Where next is a callback to be passed
 */
var prepare_model_instance_job = function(model, data)
{
	return function(next) {
		return (function() {
			if(data.id) {
				return model.update(data.id, data)
				.then(function(response) {
					if(!response.length)
						return model.create(data);

					return response[0];
				});
			}

			return model.create(data);
		})()
		.then(function(data) {
			return next(null, data);
		})
		.catch(function(error) {
			return next(error, null);
		});
	};
};


module.exports = function(config, next)
{
	var parallel = [];

	collections = config.collections;

	// Require Waterline collections. Otherwise this whole thing's a bust!
	if (typeof collections !== 'object') return next('Waterline collections ought to be specified as an option.');

	// Load fixtures directly
	if (config.fixtures) {
		parallel.push(config.fixtures);
	}

	process_all(parallel, next);
};
