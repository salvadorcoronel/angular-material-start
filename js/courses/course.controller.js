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