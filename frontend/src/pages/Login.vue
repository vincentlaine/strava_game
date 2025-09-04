<template>
  <div class="p-4 flex flex-col gap-4">
    <div>
      <input v-model="username" placeholder="Username" class="border p-2" />
      <Button label="Login" @click="loginLocal" class="ml-2" />
    </div>
    <div>
      <a :href="stravaUrl">
        <Button label="Login with Strava" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Button from 'primevue/button';

  const router = useRouter();
  const username = ref('');

  const loginLocal = () => {
    if (username.value) {
      localStorage.setItem('user', username.value);
      router.push('/');
    }
  };

  const stravaUrl = `https://www.strava.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=${encodeURIComponent(window.location.origin + '/login')}&response_type=code&scope=read`;

  onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      localStorage.setItem('strava_token', code);
      router.push('/');
    }
  });
  </script>
