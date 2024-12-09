import http from 'k6/http';
import { check, sleep } from 'k6';

// Options to configure the test
export let options = {
  vus: 10, // Number of virtual users
  duration: '30s', // Test duration
};

export default function () {
  const response = http.get('https://www.google.com');

  // Check if the response status is 200
  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  // Optional: Pause between requests
  sleep(1);
}
