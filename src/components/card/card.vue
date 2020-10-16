<template>
  <div style="background:#eee;padding: 20px">
    <Card :bordered="false">
      <p slot="title">No border title</p>
      <p>
        Content of no border type. Content of no border type. Content of no border type. Content of
        no border type.
      </p>
    </Card>
  </div>
</template>
<script>
import { Card } from 'view-design'
export default {
  name: 'TmxCard',
  components: {
    Card,
  },
}
</script>
