(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = [];

    /* @ngInject */
    function homeController() {
        var vm = this;
        vm.incomes = [];
        vm.expenses= [];

        vm.addIncome = function(){
          vm.incomes.push({description:vm.incomeDescription, amount:vm.incomeEntry, count:vm.count++});
          vm.incomeDescription = '';
          vm.incomeEntry = '';
        };

        vm.addExpenses = function(){
          vm.expenses.push({description:vm.expenseDescription, amount:vm.expenseEntry, count:vm.count++});
          vm.expenseDescription = '';
          vm.expenseEntry = '';
        };

        vm.totalIncome = function(){
          var total = 0;
          for(var i = 0; i < vm.incomes.length; i++){
              total += (vm.incomes[i].amount);
          }
          return total;

        }

    }
})();
