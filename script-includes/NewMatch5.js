var NewMatch5 = Class.create();
gs.print("Test again");
gs.print("Test test....");
gs.print("BBSR");
NewMatch5.prototype = {
    initialize: function() {
    },
    testMethod : function(){
		var gr = new GlideRecord('sys_user');
		gr.addActiveQuery();
		gr.query();
		while(gr.next()){
			var userId = gr.getValue('user_id');
			var name = gr.getValue('name');
			gs.print("UserDetails"+userId+":"+name);
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
    type: 'NewMatch5'
};