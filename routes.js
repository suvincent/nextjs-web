const routes = require('next-routes')();


routes.add('/index', '/')
      .add('/Vote/index', '/Vote/index')
      .add('/Vote/vote/:mb_addr/:address', '/Vote/vote')
      .add('/Vote/status/:mb_addr/:address', '/Vote/status')
      .add('/Vote/admin/:mb_addr/:address', '/Vote/admin')
      .add('/Vote/home/:mb_addr', '/Vote/home')
      .add('/Academic/index', '/Academic/index')
      .add('/Academic/certificates/:address/success', '/Academic/certificates/success')
      .add('/Academic/certificates/:address/transcript', '/Academic/certificates/transcript')
      .add('/Academic/school/index', '/Academic/school/index')
      .add('/Academic/school/upload/login', '/Academic/school/upload/login')
      .add('/Academic/school/upload/:address/index', '/Academic/school/upload/index')
      .add('/Academic/school/:address/students', '/Academic/school/upload/students')
      .add('/Academic/school/cancel/login', '/Academic/school/cancel/login')
      .add('/Academic/school/cancel/:address/index', '/Academic/school/cancel/index')
      .add('/Academic/ministry/login', '/Academic/ministry/login')
<<<<<<< HEAD
      .add('/Academic/ministry/schoolList', '/Academic/ministry/schoolList')
      .add('/Academic/verify/index', '/Academic/VerifyPage/index')
      .add('/Academic/verify/verifyCertificate', '/Academic/VerifyPage/verifyCert')
      .add('/dNews/index', '/dNews/index')
=======
      .add('/Academic/ministry/:address/index', '/Academic/ministry/index')
      .add('/Academic/ministry/:address/schoolList', '/Academic/ministry/schoolList')
      .add('/Academic/verifyPage/index', '/Academic/verifyPage/index')
      .add('/Academic/verifyPage/verifyCertificate', '/Academic/verifyPage/verifyCert')
>>>>>>> 89330f3b496d7f669514816cf5335a8342c02637
      .add('/Eid/index', '/Eid/index')
      .add('/Eid/List/','/Eid/List/index')
      .add('/Eid/List/index','/Eid/List/index')
      .add('/Eid/List/CreateSingleEntity', '/Eid/List/CreateSingleEntity')
      .add('/Eid/List/CreateMultipleEntity', '/Eid/List/CreateMultipleEntity')
      .add('/Eid/storage/index', '/Eid/storage/index')
      .add('/Eid/storage/:address', '/Eid/storage/storage')
      .add('/Eid/sendPage/index', '/Eid/sendPage/index')
      .add('/Eid/sendPage/:address', '/Eid/sendPage/show')
      .add('/Eid/sendPage/:address/:index/edit', '/Eid/sendPage/edit')
      .add('/Eid/receivePage/index', '/Eid/receivePage/index')
      .add('/Eid/receivePage/:address', '/Eid/receivePage/show')
      .add('/dNews/index', '/dNews/index');
module.exports = routes;