const https = require('https');

module.exports = (targetIds, notificationContent) => {
  const data = {
    app_id: process.env.ONESIGNAL_API_ID,
    contents: { en: notificationContent },
    channel_for_external_user_ids: 'push',
    include_external_user_ids: targetIds,
  };

  const options = {
    host: 'onesignal.com',
    port: 443,
    path: '/api/v1/notifications',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Basic ${process.env.ONESIGNAL_REST_API_KEY}`,
    },
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      console.log('Response:');
      console.log(JSON.parse(d));
    });
  });

  req.on('error', (e) => {
    console.log('ERROR:');
    console.log(e);
  });

  req.write(JSON.stringify(data));
  req.end();
};
