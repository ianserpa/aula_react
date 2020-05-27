exports.up = function(knex) {
    return knex.schema.createTable('usuario',
        function(table) {
            table.string('id').primary();
            table.string('nome').notNullable();
            table.string('email').notNullable();
            table.string('senha').notNullable();

    });
  };

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};

//npx knex migrate:make [nome] 
//npx knex migrate:latest