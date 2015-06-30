 // to depend on a bower installed component:
// define(['component/componentName/file'])

define(["jquery", "knockout", "domReady", "models/Task", "models/Filter", "models/TaskList",
 "utils", "bower_components/knockout-sortable/knockout-sortable"], 
 function($, ko, domReady, Task, Filter, TaskList, sortable) {
    ko.bindingHandlers.sortable.beforeMove = function(arg) {
        arg.item.Status(arg.targetParent()[0].Status());
        arg.cancelDrop = true;
    };

        ko.bindingHandlers.sortable.afterMove = function(arg) {
      //  arg.item.Status(arg.targetParent()[0].Status());
        console.log(arg.targetParent());
        console.log(arg.targetParent()[0].Title());
    };
    
    function registerComponent(componentName) {
        requireName = 'components/{0}/{0}'.format(componentName, componentName)
        ;
        ko.components.register(componentName, {require: requireName});
    
    
    }
    
    registerComponent('task-card');
    registerComponent('task-cards');
    registerComponent('filter-set');
    
    var vm = function() {
        var self = this;
        
 self.taskList = ko.observableArray([]);
         
        self.selectedFilter = ko.observable();

        self.taskList.push ( 
             new Task({Title: "View task component on Page",
            AssignedTo: "Cynthia Kinkeade",
            Status: "Done",
            Project: "Team Kanban",
            Stream: "Internal Projects"
        })
        );


       self.taskList.push ( 
            new Task({Title: "Filter task components on page",
            AssignedTo: "Kyle Hale",
            Status: "UAT",
            Project: "Team Kanban",
            Stream: "Internal Projects"
        }) 
        ); 

               self.taskList.push ( 
            new Task({Title: "Initial Assessment",
            AssignedTo: "Kyle Hale",
            Status: "Working",
            Project: "Cash Flow Reporting",
            Stream: "MSBI"
        }) 
        );

                       self.taskList.push ( 
            new Task({Title: "Change filters to ",
            AssignedTo: "Kyle Hale",
            Status: "Working",
            Project: "Cash Flow Reporting",
            Stream: "Internal Projects"
        }) 
        );

        self.Queue = new TaskList(
ko.computed(function() {
            return ko.utils.arrayFilter(self.taskList(), function(task) {
                return task.Status() == "Queue";
            });
        
        }), self.selectedFilter

        );

       
        
        
        self.Working = new TaskList ( ko.computed(function() {
            return ko.utils.arrayFilter(self.taskList(), function(task) {
                return task.Status() == "Working";
            });
        
        }) , self.selectedFilter );
        
        self.UAT = new TaskList ( ko.computed(function() {
            return ko.utils.arrayFilter(self.taskList(), function(task) {
                return task.Status() == "UAT";
            });
        
        }) , self.selectedFilter );
        
//         self.Done = ko.computed(function() {
//             return ko.utils.arrayFilter(self.taskList(), function(task) {
//                 return task.Status() == "Done";
//             });
        
//         });
        
        self.FiltersToBuild = ['AssignedTo', 'Stream', 'Project'];
        self.Filters = new Array();
        
        self.FiltersToBuild.forEach(function(filter) {
            newFilter = new Filter(filter, ko.computed(function() {
                return ko.utils.arrayGetDistinctValues(
                ko.utils.arrayMap(self.taskList(), 
                function(task) {
                    return task[filter]();
                }));
            
            }));
             if (filter == 'AssignedTo') { newFilter.Title('Assigned To'); }

            self.Filters.push(newFilter);
           
        
        });
        
        

    }
    
    domReady(
    function() {
        ko.applyBindings(vm);
    }
    );
});
