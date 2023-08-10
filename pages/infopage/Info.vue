<template>
      <div class="contact-info">
        <div class="title-detail">聯絡資訊</div>
        <div class="contact-group">
          <a :href="`tel:${data.tel}`" class="icon-contact contact-phone">
            <span>{{ data.tel }}</span>
          </a>
        </div>
        <div class="contact-group">
          <a :href="data.fb_link" class="icon-contact contact-web">
            <span>{{ data.full_name }} 官網</span>
          </a>
        </div>
      </div>
      <div class="contact-info">
        <div class="title-detail">更多資訊</div>
        <div class="contact-group">
          <a :href="data.fb_link" class="icon-contact contact-fb">
            <span>FACEBOOK 粉絲專頁</span>
          </a>
        </div>
        <div class="contact-group">
          <a :href="data.ig_link" class="icon-contact contact-instagram">
            <span>INSTAGRAM 官方帳號</span>
          </a>
        </div>
        <div class="contact-group">
          <a :href="data.line_link" class="icon-contact contact-line">
            <span>LINE 官方帳號</span>
          </a>
        </div>
      </div>
      <div class="contact-info">
        <div class="title-detail">位置</div>
        <div class="contact-group">
          <div class="icon-contact contact-address">
            <span>42444台灣台中市和平區東關路一段台電巷122-2號</span>
          </div>
        </div>
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
.contact-info
  padding: 16px

.title-detail
  color: #3c4145
  font-size: 16px
  font-weight: 500
  margin: 0 0 16px 0

.contact-group
  display: flex
  align-items: center
  margin-bottom: 4px
  span
    font-size: 14px
    color: #1d1f20

.icon-contact
  display: flex
  align-items: center
  &::before
    content: ''
    display: inline-block
    width: 16px
    height: 16px
    background-size: contain
    margin-right: 4px

.contact-phone::before
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTI0IDB2MjRIMFYwaDI0Wk0xMi41OTMgMjMuMjU4bC0uMDExLjAwMmwtLjA3MS4wMzVsLS4wMi4wMDRsLS4wMTQtLjAwNGwtLjA3MS0uMDM1Yy0uMDEtLjAwNC0uMDE5LS4wMDEtLjAyNC4wMDVsLS4wMDQuMDFsLS4wMTcuNDI4bC4wMDUuMDJsLjAxLjAxM2wuMTA0LjA3NGwuMDE1LjAwNGwuMDEyLS4wMDRsLjEwNC0uMDc0bC4wMTItLjAxNmwuMDA0LS4wMTdsLS4wMTctLjQyN2MtLjAwMi0uMDEtLjAwOS0uMDE3LS4wMTctLjAxOFptLjI2NS0uMTEzbC0uMDEzLjAwMmwtLjE4NS4wOTNsLS4wMS4wMWwtLjAwMy4wMTFsLjAxOC40M2wuMDA1LjAxMmwuMDA4LjAwN2wuMjAxLjA5M2MuMDEyLjAwNC4wMjMgMCAuMDI5LS4wMDhsLjAwNC0uMDE0bC0uMDM0LS42MTRjLS4wMDMtLjAxMi0uMDEtLjAyLS4wMi0uMDIyWm0tLjcxNS4wMDJhLjAyMy4wMjMgMCAwIDAtLjAyNy4wMDZsLS4wMDYuMDE0bC0uMDM0LjYxNGMwIC4wMTIuMDA3LjAyLjAxNy4wMjRsLjAxNS0uMDAybC4yMDEtLjA5M2wuMDEtLjAwOGwuMDA0LS4wMTFsLjAxNy0uNDNsLS4wMDMtLjAxMmwtLjAxLS4wMWwtLjE4NC0uMDkyWiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2LjU1MiAyMi4xMzNjLTEuNDQtLjA1My01LjUyMS0uNjE3LTkuNzk1LTQuODljLTQuMjczLTQuMjc0LTQuODM2LTguMzU0LTQuODktOS43OTVjLS4wOC0yLjE5NiAxLjYwMi00LjMyOSAzLjU0NS01LjE2MmExLjQ3IDEuNDcgMCAwIDEgMS40NDUuMTU5YzEuNiAxLjE2NiAyLjcwNCAyLjkzIDMuNjUyIDQuMzE3YTEuNTA0IDEuNTA0IDAgMCAxLS4yNTYgMS45ODZsLTEuOTUxIDEuNDQ5YS40OC40OCAwIDAgMC0uMTQyLjYxNmMuNDQyLjgwMyAxLjIyOCAxLjk5OSAyLjEyOCAyLjg5OWMuOTAxLjkgMi4xNTMgMS43MzggMy4wMTIgMi4yM2EuNDgzLjQ4MyAwIDAgMCAuNjQ0LS4xNjJsMS4yNy0xLjkzM2ExLjUwMyAxLjUwMyAwIDAgMSAyLjA1Ni0uMzMyYzEuNDA3Ljk3NCAzLjA0OSAyLjA1OSA0LjI1MSAzLjU5OGExLjQ3IDEuNDcgMCAwIDEgLjE4OSAxLjQ4NWMtLjgzNyAxLjk1My0yLjk1NSAzLjYxNi01LjE1OCAzLjUzNVoiLz48L2c+PC9zdmc+)

.contact-web::before
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxNC41Yy4yMyAwIC44NDMtLjIyNiAxLjQ4Ny0xLjUxNGMuMzA2LS42MTIuNTYzLTEuMzcuNzQyLTIuMjM2SDUuNzcxYy4xNzkuODY2LjQzNiAxLjYyNC43NDIgMi4yMzZDNy4xNTcgMTQuMjc0IDcuNzcgMTQuNSA4IDE0LjVaTTUuNTU0IDkuMjVhMTQuNDQ0IDE0LjQ0NCAwIDAgMSAwLTIuNWg0Ljg5MmExNC40NTIgMTQuNDUyIDAgMCAxIDAgMi41SDUuNTU0Wm02LjIwMyAxLjVjLS4yMjQgMS4yMjQtLjU5MyAyLjMwOC0xLjA2NiAzLjE2OGE2LjUyNSA2LjUyNSAwIDAgMCAzLjItMy4xNjhoLTIuMTM0Wm0yLjYyMy0xLjVoLTIuNDNhMTYuMDE5IDE2LjAxOSAwIDAgMCAwLTIuNWgyLjQyOWE2LjUzMyA2LjUzMyAwIDAgMSAwIDIuNVptLTEwLjMzMSAwSDEuNjJhNi41MzMgNi41MzMgMCAwIDEgMC0yLjVoMi40M2ExNS45OTQgMTUuOTk0IDAgMCAwIDAgMi41Wm0tMS45NCAxLjVoMi4xMzRjLjIyNCAxLjIyNC41OTMgMi4zMDggMS4wNjYgMy4xNjhhNi41MjUgNi41MjUgMCAwIDEtMy4yLTMuMTY4Wm0zLjY2Mi01LjVoNC40NThjLS4xNzktLjg2Ni0uNDM2LTEuNjI0LS43NDItMi4yMzZDOC44NDMgMS43MjYgOC4yMyAxLjUgOCAxLjVjLS4yMyAwLS44NDMuMjI2LTEuNDg3IDEuNTE0Yy0uMzA2LjYxMi0uNTYzIDEuMzctLjc0MiAyLjIzNlptNS45ODYgMGgyLjEzNGE2LjUyNiA2LjUyNiAwIDAgMC0zLjItMy4xNjhjLjQ3My44Ni44NDIgMS45NDQgMS4wNjYgMy4xNjhaTTUuMzEgMi4wODJjLS40NzMuODYtLjg0MiAxLjk0NC0xLjA2NiAzLjE2OEgyLjEwOWE2LjUyNSA2LjUyNSAwIDAgMSAzLjItMy4xNjhaTTggMGE4IDggMCAxIDEgMCAxNkE4IDggMCAwIDEgOCAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)

.contact-fb::before
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTggMUM0LjEzIDEgMSA0LjE1IDEgOC4wNGMwIDMuNTEgMi41NiA2LjQzIDUuOTEgNi45NnYtNC45Mkg1LjEzVjguMDRoMS43OFY2LjQ5YzAtMS43NyAxLjA1LTIuNzQgMi42NC0yLjc0Yy43NyAwIDEuNTcuMTQgMS41Ny4xNHYxLjczaC0uODhjLS44NyAwLTEuMTQuNTQtMS4xNCAxLjF2MS4zMmgxLjk0bC0uMzEgMi4wNEg5LjFWMTVjMy4zNS0uNTMgNS45MS0zLjQ0IDUuOTEtNi45NmMwLTMuODktMy4xMy03LjA0LTctNy4wNFoiLz48L3N2Zz4=)

.contact-instagram::before
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDBjLTQuMzQ5IDAtNC44OTEuMDIxLTYuNTkzLjA5M2MtMS43MDkuMDg0LTIuODY1LjM0OS0zLjg4NS43NDVhNy44NDcgNy44NDcgMCAwIDAtMi44MzMgMS44NDlBNy43NTcgNy43NTcgMCAwIDAgLjg0IDUuNTJDLjQ0NCA2LjU0LjE3OSA3LjY5Ni4wOTUgOS40MDVjLS4wNzcgMS43MDMtLjA5MyAyLjI0NC0uMDkzIDYuNTkzcy4wMjEgNC44OTEuMDkzIDYuNTkzYy4wODQgMS43MDQuMzQ5IDIuODY1Ljc0NSAzLjg4NWE3Ljg0NyA3Ljg0NyAwIDAgMCAxLjg0OSAyLjgzM2E3Ljc1NyA3Ljc1NyAwIDAgMCAyLjgzMyAxLjg0OWMxLjAyLjM5MSAyLjE4MS42NjEgMy44ODUuNzQ1YzEuNzAzLjA3NyAyLjI0NC4wOTMgNi41OTMuMDkzczQuODkxLS4wMjEgNi41OTMtLjA5M2MxLjcwNC0uMDg0IDIuODY1LS4zNTUgMy44ODUtLjc0NWE3Ljg0NyA3Ljg0NyAwIDAgMCAyLjgzMy0xLjg0OWE3LjcxNiA3LjcxNiAwIDAgMCAxLjg0OS0yLjgzM2MuMzkxLTEuMDIuNjYxLTIuMTgxLjc0NS0zLjg4NWMuMDc3LTEuNzAzLjA5My0yLjI0NC4wOTMtNi41OTNzLS4wMjEtNC44OTEtLjA5My02LjU5M2MtLjA4NC0xLjcwNC0uMzU1LTIuODcxLS43NDUtMy44ODVhNy44NDcgNy44NDcgMCAwIDAtMS44NDktMi44MzNBNy43MTYgNy43MTYgMCAwIDAgMjYuNDc4LjgzOGMtMS4wMi0uMzk2LTIuMTgxLS42NjEtMy44ODUtLjc0NUMyMC44OS4wMTYgMjAuMzQ5IDAgMTYgMHptMCAyLjg4YzQuMjcxIDAgNC43ODEuMDIxIDYuNDY5LjA5M2MxLjU1Ny4wNzMgMi40MDUuMzMzIDIuOTY4LjU1M2E0Ljk4OSA0Ljk4OSAwIDAgMSAxLjg0NCAxLjE5N2E0LjkzMSA0LjkzMSAwIDAgMSAxLjE5MiAxLjgzOWMuMjIuNTYzLjQ4IDEuNDExLjU1MyAyLjk2OGMuMDcyIDEuNjg4LjA5MyAyLjE5OS4wOTMgNi40NjlzLS4wMjEgNC43ODEtLjA5OSA2LjQ2OWMtLjA4NCAxLjU1Ny0uMzQ0IDIuNDA1LS41NjMgMi45NjhjLS4zMDMuNzUxLS42NDEgMS4yNzYtMS4xOTkgMS44NDRhNS4wNDggNS4wNDggMCAwIDEtMS44NDQgMS4xOTJjLS41NTYuMjItMS40MTYuNDgtMi45NzkuNTUzYy0xLjY5Ny4wNzItMi4xOTcuMDkzLTYuNDc5LjA5M3MtNC43ODEtLjAyMS02LjQ4LS4wOTljLTEuNTU3LS4wODQtMi40MTYtLjM0NC0yLjk3OS0uNTYzYy0uNzYtLjMwMy0xLjI4MS0uNjQxLTEuODM5LTEuMTk5Yy0uNTYzLS41NjMtLjkyMS0xLjA5OS0xLjE5Ny0xLjg0NGMtLjIyNC0uNTU2LS40OC0xLjQxNi0uNTYzLTIuOTc5Yy0uMDU3LTEuNjc3LS4wODQtMi4xOTctLjA4NC02LjQ1OWMwLTQuMjYuMDI3LTQuNzgxLjA4NC02LjQ3OWMuMDgzLTEuNTYzLjMzOS0yLjQyMS41NjMtMi45NzljLjI3Ni0uNzYxLjYzNS0xLjI4MSAxLjE5Ny0xLjg0NGMuNTU3LS41NTcgMS4wNzktLjkxNyAxLjgzOS0xLjE5OWMuNTYzLS4yMTkgMS40MDEtLjQ3OSAyLjk2NC0uNTU3YzEuNjk3LS4wNjEgMi4xOTctLjA4MyA2LjQ3My0uMDgzem0wIDQuOTA3QTguMjEgOC4yMSAwIDAgMCA3Ljc4NyAxNkE4LjIxIDguMjEgMCAwIDAgMTYgMjQuMjEzQTguMjEgOC4yMSAwIDAgMCAyNC4yMTMgMTZBOC4yMSA4LjIxIDAgMCAwIDE2IDcuNzg3em0wIDEzLjU0NmMtMi45NDggMC01LjMzMy0yLjM4NS01LjMzMy01LjMzM3MyLjM4NS01LjMzMyA1LjMzMy01LjMzM2MyLjk0OCAwIDUuMzMzIDIuMzg1IDUuMzMzIDUuMzMzUzE4Ljk0OCAyMS4zMzMgMTYgMjEuMzMzek0yNi40NjQgNy40NTlhMS45MjMgMS45MjMgMCAwIDEtMS45MjMgMS45MjFhMS45MTkgMS45MTkgMCAxIDEgMC0zLjgzOGMxLjA1NyAwIDEuOTIzLjg2IDEuOTIzIDEuOTE3eiIvPjwvc3ZnPg==)

.contact-line::before
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0yNCAwdjI0SDBWMGgyNFpNMTIuNTkzIDIzLjI1OGwtLjAxMS4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE0LS4wMDRsLS4wNzEtLjAzNWMtLjAxLS4wMDQtLjAxOS0uMDAxLS4wMjQuMDA1bC0uMDA0LjAxbC0uMDE3LjQyOGwuMDA1LjAybC4wMS4wMTNsLjEwNC4wNzRsLjAxNS4wMDRsLjAxMi0uMDA0bC4xMDQtLjA3NGwuMDEyLS4wMTZsLjAwNC0uMDE3bC0uMDE3LS40MjdjLS4wMDItLjAxLS4wMDktLjAxNy0uMDE3LS4wMThabS4yNjUtLjExM2wtLjAxMy4wMDJsLS4xODUuMDkzbC0uMDEuMDFsLS4wMDMuMDExbC4wMTguNDNsLjAwNS4wMTJsLjAwOC4wMDdsLjIwMS4wOTNjLjAxMi4wMDQuMDIzIDAgLjAyOS0uMDA4bC4wMDQtLjAxNGwtLjAzNC0uNjE0Yy0uMDAzLS4wMTItLjAxLS4wMi0uMDItLjAyMlptLS43MTUuMDAyYS4wMjMuMDIzIDAgMCAwLS4wMjcuMDA2bC0uMDA2LjAxNGwtLjAzNC42MTRjMCAuMDEyLjAwNy4wMi4wMTcuMDI0bC4wMTUtLjAwMmwuMjAxLS4wOTNsLjAxLS4wMDhsLjAwNC0uMDExbC4wMTctLjQzbC0uMDAzLS4wMTJsLS4wMS0uMDFsLS4xODQtLjA5MloiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMy41IDNhOC41IDguNSAwIDAgMSAwIDE3SDEzdi45OUExLjAxIDEuMDEgMCAwIDEgMTEuOTg5IDIyYy0yLjQ2LS4wMDItNC45NTItLjgyMy02Ljg0My0yLjUwNEMzLjIzOCAxNy43OTggMi4wMDIgMTUuMjc1IDIgMTIuMDA5VjExLjVBOC41IDguNSAwIDAgMSAxMC41IDNoM1ptMCAyaC0zQTYuNSA2LjUgMCAwIDAgNCAxMS41bC4wMDEuNjY1Yy4wNCAyLjY0MiAxLjA0MSA0LjU2MiAyLjQ3NSA1LjgzNkM3LjcxNCAxOS4xMDMgOS4zMTcgMTkuNzYgMTEgMTkuOTQ1di0uOTM1YzAtLjU1OC40NTItMS4wMSAxLjAxLTEuMDFoMS40OWE2LjUgNi41IDAgMSAwIDAtMTNabS01IDVhMS41IDEuNSAwIDEgMSAwIDNhMS41IDEuNSAwIDAgMSAwLTNabTcgMGExLjUgMS41IDAgMSAxIDAgM2ExLjUgMS41IDAgMCAxIDAtM1oiLz48L2c+PC9zdmc+)

.contact-address:before
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDJDNy41ODkgMiA0IDUuNTg5IDQgOS45OTVDMy45NzEgMTYuNDQgMTEuNjk2IDIxLjc4NCAxMiAyMmMwIDAgOC4wMjktNS41NiA4LTEyYzAtNC40MTEtMy41ODktOC04LTh6bTAgMTJjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTRzNCAxLjc5IDQgNHMtMS43OSA0LTQgNHoiLz48L3N2Zz4=)



</style>
