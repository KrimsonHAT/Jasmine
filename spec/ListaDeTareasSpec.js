describe('Una lista de tareas', function(){
    var listaTareas;
    beforeEach(function(){
        listaTareas = new Tareas();
    })

    it('debe estar vacia cuando se cree',function(){
        expect(listaTareas.isEmpty()).toBe(true);

    });

    describe('Cuando se añade una tarea',function(){

        beforeEach(function(){
                listaTareas.agregarTarea('Tarea Test Jasmine');
        });
        it('No debe de estar vacia',function(){
                expect(listaTareas.isEmpty()).toBe(false);

        });
        it('Debe poder contener mas de ua tarea',function(){
                listaTareas.agregarTarea('tarea Tests Jasmine2');
                expect(listaTareas.size()).toBe(2);

        });
        it('Deberia estar sin completar al agregar una nueva tarea',function(){
                expect(listaTareas.tarea(0).terminada()).toBe(false);

        });
        it('Deberia de poderse completar o finalizar la lista',function(){

            listaTareas.tarea(0).terminar();
            expect(listaTareas.tarea(0).terminada()).toBe(true);

        });
        it('deberia de quedar vacia al borrar la ultima tarea',function(){
                listaTareas.removerTarea(0);
                expect(listaTareas.isEmpty()).toBe(true);

        });
    });


});