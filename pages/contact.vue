<template>
  <div class="container py-20">
    <h1 class="text-3xl font-semibold text-center">Work In Progress</h1>
    <form class="max-w-lg mx-auto">
      <label for="name" class="mb-1">
        Name
      </label>
      <input
        id="name"
        class="block w-full px-2 py-3 mb-2 text-white bg-transparent border rounded-md border-dark-500"
        type="text"
        name="name"
      />
      <label for="message" class="mb-1">
        Message
      </label>
      <input
        id="message"
        class="block w-full px-2 py-3 mb-2 text-white bg-transparent border rounded-md border-dark-500"
        type="text"
        name="message"
      />
      <div class="pt-4 text-right">
        <button class="btn btn-primary" type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
