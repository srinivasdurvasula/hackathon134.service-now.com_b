var NewScript18 = Class.create();
NewScript18.prototype = {
    initialize: function() {
    },
	testMethod : function(){
	
		var gr = new GlideRecord('sys_user');
		gr.addActiveQuery();
		gr.query();
		while(gr.next()){
			var name = gr.getValue('name');
			var userId = gr.getValue('UserID');
		}
	},
	testMethod1 : function(){
		var inc = new GlideRecord('incident');
       inc.addActiveQuery();
       inc.query();
		while(inc.next()){
		var number = inc.getValue('number');
		
		}
	},


    type: 'NewScript18'
};