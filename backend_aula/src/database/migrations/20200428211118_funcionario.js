exports.up = function(knex) {
    return knex.schema.createTable('funcionario', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('empresa').notNullable();
    });
  };

exports.down = function(knex) {
    return knex.schema.dropTable('funcionario');
};