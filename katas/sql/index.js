// with recursive employee_levels(level, id, first_name, last_name, manager_id) as
// (select 
// 1 as level,
// id, first_name, last_name, manager_id
// from employees
// where manager_id is null
// union all
// select level + 1,
// e.id, e.first_name, e.last_name, e.manager_id
// from employees e, employee_levels e1
// where e.manager_id = e1.id
// )
// select level, id, first_name, last_name, manager_id
// from employee_levels;
