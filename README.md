## Resumen

Angular Material Start es un ejemplo básico de como iniciar una aplicación con Angular Material, además de ello, el ejemplo contiene un módulo llamado 'courses' el cual contiene la lógica de aplicación para mostrar una lista de cursos y el detalle de cada curso.

## Código

Utilizamos las directivas layout y flex de angular material en la Vista
```html
<div flex layout="row" ng-controller="CourseCtrl as vm">
    <md-sidenav md-is-locked-open="true" class="md-whiteframe-z2">
		<md-list>
			<md-list-item class="md-2-line" ng-repeat="course in vm.courses" ng-click="vm.updateCourseDetail(course)">
              	<md-icon md-font-set="material-icons">{{course.image}}</md-icon>
              	<div class="md-list-item-text">
	                <h3>{{course.name}}</h3>
	                <p> {{course.tags}} </p>		                
              	</div>
            </md-list-item>
      	</md-list>
    </md-sidenav>        
    <md-content flex id="content" layout-padding>
	    <h2>{{vm.courseDetail.name}}</h2>
	    <p>
	        {{vm.courseDetail.description}}
	    </p>
	    <md-button target="_blank" ng-href="{{vm.courseDetail.link}}" class="md-raised md-primary">Matrículate</md-button>
    </md-content>
</div>
```

Creamos el Módulo de la aplicación
```javascript
(function() {
    'use strict';
	angular
		.module('courses', []);

})();
```

Aquí implementamos la lógica o funcionalidad de la vista. 
```javascript
(function() {
    'use strict';
	angular
		.module('courses')
		.controller('CourseCtrl', CourseCtrl);

	CourseCtrl.$inject = ['CourseFactory'];

	function CourseCtrl(CourseFactory) {

		var vm = this;
		vm.courseDetail = {};
		vm.courses = [];		
		vm.updateCourseDetail = updateCourseDetail;

		init();	
		
		function init(){
			getCourses();
		};

		function getCourses(){
			CourseFactory.getCourses().then(function(response) {
            	vm.courses = response;
            	vm.courseDetail = vm.courses[0];
	        });
		}

		function updateCourseDetail(course){
			vm.courseDetail = course;
		}
	};
})();
```

Este archivo contiene la información de los cursos, la cual podemos consultar desde cualquier controlador.
```javascript
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
```

## Instalación

```bash
# Primero clona el repositorio en tu entorno local
git clone https://github.com/salvadorcoronel/angular-material-start.git

# Instala las dependencias de angular-material definidas en el archivo bower.json
bower install
```

## License

Usted puede redistribuir y/o modificar bajo los términos de la General Public License de GNU según lo publicado por la Free Software Foundation.
