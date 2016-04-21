(function() {
    'use strict';
	angular
		.module('courses')
		.factory('CourseFactory', CourseFactory);

	CourseFactory.$inject = ['$q'];

	function CourseFactory($q) {		
		var service = {
			getCourses: getCourses
		};

		return service;

		function getCourses(){
			var courses = [];

			var defered = $q.defer();
        	var promise = defered.promise;
        	try {
        		courses = [
					{
					 	_id: '0001',
					 	name: 'Programación Web',
					 	tags: 'Frontend',
					 	description: 'Desde cero conocimientos, obtendrás todas las habilidades para programar páginas web en sólo 8 semanas.',
					 	image: 'code',
					 	link: 'http://talentec.pe/cursos/frontend/'
					},
					{
					 	_id: '0002',
					 	name: 'Android',
					 	tags: 'Frontend',
					 	description: 'Sin conocimientos previos de programación móvil, con este curso podrás desarrollar tus propias aplicaciones Android en tan sólo 6 semanas.',
					 	image: 'android',
					 	link: 'http://talentec.dev/cursos/android/'
					},
					{
					 	_id: '0003',
					 	name: 'Mean Stack',
					 	tags: 'Frontend | Backend',
					 	description: 'Asiste a este curso y aprende a desarrollar tus aplicaciones web apalancando MEAN para hacer el front-end y back-end con JavaScript.',
					 	image: 'explore',
					 	link: 'http://talentec.dev/cursos/mean/'
					}
				];
				
			    defered.resolve(courses);
			}
			catch(err) {
			    defered.reject(err);
			}
      		
	    	return promise;
		}
	};

})();