'use strict'
exports[`no plan_0`] = `TAP version 13
ok 1 - this is fine
1..1
`

exports[`plan_0`] = `TAP version 13
1..1
ok 1 - this is fine
`

exports[`comment_0`] = `TAP version 13
# this is fine
1..0
`

exports[`todo_0`] = `TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: 22
    column: 10
    file: unit/test.js
    function: todo
  source: |
    tt.fail('i will do this later', { todo: true })
  ...

ok 2 - i will do this later # TODO
not ok 3 - this is fine # SKIP
ok 4 - i did not do this later # SKIP
1..4
# todo: 2
# skip: 2
`

exports[`no plan fail_0`] = `TAP version 13
not ok 1 - this is fine
1..1
# failed 1 test
`

exports[`plan fail_0`] = `TAP version 13
1..1
not ok 1 - this is fine
# failed 1 test
`

exports[`expect fail_0`] = `TAP version 13
1..1
ok 1 - this is fine
`

exports[`sub_0`] = `TAP version 13
# Subtest: named child
    ok 1 - this is fine
    1..1
ok 1 - named child # {time}

# Subtest: named_function
    1..1
    ok 1 - also fine
ok 2 - named_function # {time}

# Subtest: promisey
    ok 1 - i promise, it is fine
    1..1
ok 3 - promisey # {time}

1..3
`
