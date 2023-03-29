const mysql = require('mysql2');

const config = {
  host: 'localhost',
  user: 'root',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
};

const pool = mysql.createPool(config);

module.exports = {
    query(sql, params) {
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, conn) {
                if (err)
                return reject(err)
                // Do something with the connection
                conn.query(sql, params, function (err, rows) {
                    // Connection is automatically released when query resolves
                    if (err) {
                        pool.releaseConnection(conn)
                        return reject(err)
                    }
                    resolve(rows)
                    pool.releaseConnection(conn)
                });
                // Don't forget to release the connection when finished!
            })
        }
    },

    end() {
        pool.end();
      }
}
