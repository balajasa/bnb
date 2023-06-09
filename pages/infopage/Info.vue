<template>
        <div>
        <h4>聯絡資訊</h4>
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
      <div>
        <h4>更多資訊</h4>
        <div>
          <a :href="data.fb_link">
            <i class="owl-link-intact"></i>
            <span>📘 . FACEBOOK 粉絲專頁</span>
          </a>
        </div>
        <div>
          <a :href="data.ig_link">
            <i class="owl-link-intact"></i>
            <span>📕 . INSTAGRAM 官方帳號</span>
          </a>
        </div>
        <div>
          <a :href="data.line_link">
            <i class="owl-link-intact"></i>
            <span>💬 . LINE 官方帳號</span>
          </a>
        </div>
      </div>
      <div>
        <h4>位置</h4>
        <!-- GoogleMap -->
        <iframe
          :src="data.map_link"
          :width="'100%'"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
</template>

<script lang="ts" setup>
import { IInfo } from './types';
const props = defineProps<{ data: IInfo }>();
</script>

<style lang="sass" scoped>
*, :after, :before
  border: 0 solid #d1d7dd

.owl-phone:before
  content: "\E85B"
.owl-earth:before
  content: "\E82C"
.owl-link-intact:before
  content: "\E84B"
[class*=" owl-"]:before, [class^=owl-]:before
  font-family: owl
  font-style: normal
  font-weight: 400
  speak: none
  display: inline-block
  text-decoration: inherit
  width: 1em
  margin-right: 0.2em
  text-align: center
  font-variant: normal
  text-transform: none
  line-height: 1em
  margin-left: 0.2em
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
