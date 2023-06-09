<template>
  <footer class="footer">
    <div class="footer__hotel">
      <h3>{{ data.full_name }}</h3>
      <hr />
      <div class="footer__contacts">
        <div>
          <a :href="data.map_link">
            <i class="owl-phone"></i>
            <span>{{ data.address }}</span>
          </a>
        </div>
        <div>
          <a :href="`tel:${data.tel}`">
            <i class="owl-phone"></i>
            <span>{{ data.tel }}</span>
          </a>
        </div>
        <div>
          <a :href="data.fb_link">
            <i class="owl-earth"></i>
            <span>{{ data.full_name }} 官網</span>
          </a>
        </div>
      </div>
    </div>
    <div class="block">Powered by BnB</div>
  </footer>
</template>

<script lang="ts" setup>
import { IInfo } from "./types";
const props = defineProps<{ data: IInfo }>();
</script>
<style lang="sass" scoped>

.footer
  padding-top: 1.5rem
  padding-bottom: 1.5rem
  background-color: #f8fafc
  border: 0 solid #d1d7dd
  .footer__hotel
    color: #686e74
    width: 100%
    margin-right: auto
    margin-left: auto
    padding-right: 1rem
    padding-left: 1rem
  h3
    text-align: center
  .footer__contacts
    display: flex
    flex-direction: column
    font-size: .875rem
  .block
    text-align: center
</style>
