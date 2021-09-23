const statement = 'create table author (id number, name string, age number, city string, state string, country string)';
const tableName = statement.match(/table \w+/)[0].replace(/table\s/, '');
const columns = statement.match(/()$/);
console.log({ tableName });
console.log({ columns });