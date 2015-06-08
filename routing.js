/*****************************************
**** CONFIGURATION ***********************
******************************************/

Router.configure({
	layoutTemplate: 'ImpactLayoutDefault'
});

DefaultLayoutController=RouteController.extend({
	layoutTemplate: 'ImpactLayoutDefault',
	loadTemplate: 'ImpactLoadDefault'
});

AdminLayoutController=RouteController.extend({
	layoutTemplate: 'ImpactLayoutAdmin',
	loadTemplate: 'ImpactLoadAdmin'
});

RootController=DefaultLayoutController.extend({
	template: 'ImpactUnderConstruction'
});

AdminIndexController=AdminLayoutController.extend({
	template: 'ImpactUnderConstruction'
});


/*****************************************
**** ACTUAL ROUTING **********************
******************************************/

Router.route('/', {
	name: 'root',
	controller: RootController
});

Router.route('/admin', {
	name: 'admin',
	controller: AdminIndexController
});