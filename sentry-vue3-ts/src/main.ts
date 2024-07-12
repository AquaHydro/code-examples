import { createApp } from 'vue'
import * as Sentry from '@sentry/vue';
import './style.css'
import App from './App.vue'
const app = createApp(App);


// createApp(App).mount('#app')


Sentry.init({
  app,
  dsn: "https://4f63f1382fccee3a0650e30981fc2937@o4507570590384128.ingest.de.sentry.io/4507570591826000",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


app.mount('#app')
