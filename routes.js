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
      .add('/Academic/school/upload/:address/students', '/Academic/school/upload/students')
      .add('/Academic/school/cancel/login', '/Academic/school/cancel/login')
      .add('/Academic/school/cancel/:address/index', '/Academic/school/cancel/index')
      .add('/Academic/ministry/login', '/Academic/ministry/login')
      .add('/Academic/ministry/:address/index', '/Academic/ministry/index')
      .add('/Academic/ministry/:address/schoolList', '/Academic/ministry/schoolList')
      .add('/Academic/verifyPage/index', '/Academic/verifyPage/index')
      .add('/Academic/verifyPage/verifyCertificate', '/Academic/verifyPage/verifyCert')
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
      .add('/dNews/index', '/dNews/index')
      .add('/dNews/journalist/editor/LoginPage', '/dNews/journalist/editor/LoginPage')
      .add('/dNews/journalist/editor/:address/EditorReq', '/dNews/journalist/editor/EditorReq')
      .add('/dNews/journalist/editor/:address/EditorList/:index', '/dNews/journalist/editor/EditorList')
      .add('/dNews/journalist/editor/:address/EditorList/:index/:state', '/dNews/journalist/editor/EditorList')
      .add('/dNews/journalist/editor/ChildInfo', '/dNews/journalist/editor/ChildInfo')
      .add('/dNews/journalist/editor/:address/:address2/ChildShow/:type', '/dNews/journalist/editor/ChildShow')
      .add('/dNews/journalist/owner/LoginPage', '/dNews/journalist/owner/LoginPage')
      .add('/dNews/journalist/owner/:address/OwnerReq', '/dNews/journalist/owner/OwnerReq')
      .add('/dNews/journalist/owner/:address/QueryChildShow', '/dNews/journalist/owner/QueryChildShow')
      .add('/dNews/ReadingPage/newsList', '/dNews/ReadingPage/newsList')
      .add('/dNews/journalist/owner/Pd/:address/:index', '/dNews/journalist/owner/Pd')
      .add('/dNews/journalist/owner/Attest/:address/:address2', '/dNews/journalist/owner/Attest')
      ;

module.exports = routes;