exports.up = function(knex) {
    return knex.schema.createTable('veiculos', function(table) {
        table.string('placa').primary();
        table.string('modelo').notNullable();
        table.string('modelo_comp').notNullable();
    });
  };

exports.down = function(knex) {
    return knex.schema.dropTable('veiculos');
};