angular
  .module('angularAddresses', [])

  .controller('Main', function(){
    var vm = this;
    vm.people = [
    {name: 'Earth', twitter: '@CaptainPlanet', number: '(123)555-1111', photo:'http://i.imgur.com/fsw9I8V.gif'},
    {name: 'Greg', twitter: '@Greg', number: '(123)555-2222', photo:'http://i.imgur.com/uTONfVS.jpg'},
    {name: 'Shmoe', twitter: '@JoeShmoe', number: '(123)555-3333', photo:'http://i.imgur.com/yLCfE5l.jpg'},
    {name: 'Alan', twitter: '@Rickman_Alan', number: '(123)867-5309', photo:'http://i.imgur.com/AAuJNDl.jpg'},
    {name: "Bradley", twitter: '@B_rad', number: '(123)555-5555', photo:'http://i.imgur.com/Vo0pllf.jpg'}
    ];

    vm.newPerson = {};

    vm.addNewAddress = function(){
      vm.people.push(vm.newPerson);
      vm.newPerson = {};
    };

    vm.removeAddress = function(person){
      var index = vm.people.indexOf(person);
      vm.people.splice(index, 1);
    }
});
