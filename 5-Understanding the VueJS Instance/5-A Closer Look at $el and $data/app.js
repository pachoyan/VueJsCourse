var data = {
   title: 'The VueJS Instance',
    showParagraph: false
}

var vm1 = new Vue({
  el: '#app',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods : {
    onChange : function(){
      //Access instace from other vue instance
      vm1.title = 'Changed!';
    }
  }
});

//Access property from outside
console.log(vm2.$data.title);

//Verify if vm1.$data is data var created
console.log(vm1.$data === data);


//Access vue instance from outside
setTimeout(function() {
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);
