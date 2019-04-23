describe('toDoList', () => {
  beforeEach(angular.mock.module('my-app.components.toDoList'));

  var  $rootScope, $compile, $element;

  beforeEach(inject(function(_$rootScope_,  _$compile_, $templateCache){
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $templateCache.put('features/todo-list/todo-list.html', '<grid title="title" headers="headers" items="items" on-click="onClickDone(item)" on-remove="onClickRemove(item)"></grid>');

    var $scope = $rootScope.$new();
    $element = $compile('<to-do-list></to-do-list>')($scope);

    expect($element).toBeDefined('$element');
    expect($element.controller).toBeDefined('$element.controller');

    $scope.$apply();
    applyChanges();
  }));


  it('done button change status to finish', function() {
    let item = {id: 0, status: 0};
    getScope().items = [item];
    getScope().onClickDone(item);
    expect(getScope().items[0].status).toEqual(1);
  });

  it('done button change status to finish of a specif item', function() {
    let item = {
      id: 0, status: 0
    };
    let items = [{
      id: 0, status: 0
    }, item, {
      id: 2, status: 0
    }
  ];
    
    getScope().items = items;
    getScope().onClickDone(item);

    let doneItems = getScope().items.filter(function(item){
      return item.status === 1;
    });

    expect(doneItems.length).toEqual(1);
    expect(doneItems[0]).toBeDefined();
  });

  it('remove button remove item from scope', function() {
    let item = {id: 0, status: 0};
    getScope().items = [item];
    getScope().onClickRemove(item);
    expect(getScope().items.length).toEqual(0);
  });
  
  it('remove button remove a specif item from scope', function() {
    let item = {
      id: 1, status: 0
    };
    getScope().items = getItems();
    getScope().onClickRemove(item);

    expect(getScope().items.length).toEqual(2);
  });

  function getItems() {
    let items = [{
        id: 0, status: 0
      }, {
        id: 1, status: 0
      }, {
        id: 2, status: 0
      }
    ];

    return items;
  }

  function getScope() {
    return $element.isolateScope()
  }

  function applyChanges() {
    getScope().$apply()
  }
})
