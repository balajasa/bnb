<template>
  <div class="title">家霖農場 Garin Farm - 谷關露營</div>
  <div class="information">
    <!-- 左側 -->
    <div class="left-side">
      <!-- 星數、評價 -->
      <span class="rating">
        <span class="stars">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="display: block; height: 14px; width: 14px; fill: currentcolor"
          >
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </span>

        <span class="rating-avg">5.0</span>
        ·
        <span class="comments">3 則評價</span>
      </span>
      <span class="dot"> . </span>
      <span class="address">
        <button class="address-btn">
          <span class="address-content">
            42444台灣台中市和平區東關路一段台電巷122-2號
          </span>
        </button>
      </span>
    </div>
    <!-- 右側 -->
    <div class="right-side">
      <!-- 分享 -->
      <div class="share-btn">
        <button class="title-btn">
          <div class="title-btn-container">
            <span class="svg-icon">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  fill: none;
                  height: 16px;
                  width: 16px;
                  stroke: currentcolor;
                  stroke-width: 2px;
                  overflow: visible;
                "
              >
                <g fill="none">
                  <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                  <path d="M16 3v23V3z"></path>
                  <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                </g>
              </svg>
            </span>
            <span style="text-decoration: underline">分享</span>
          </div>
        </button>
      </div>
      <!-- 儲存 -->
      <div>
        <button class="title-btn">
          <div class="title-btn-container">
            <span class="svg-icon">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  fill: none;
                  height: 16px;
                  width: 16px;
                  stroke: currentcolor;
                  stroke-width: 2px;
                  overflow: visible;
                "
              >
                <path
                  d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                ></path>
              </svg>
            </span>
            <span style="text-decoration: underline">儲存</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.title {
  font-size: 26px;
  font-weight: bold;
  line-height: 30px;
}
.information {
  line-height: 14px;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
}
.left-side {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}
.rating {
  min-width: 0px;
  margin-top: 4px;
  align-items: center;
  display: inline-flex;
}
.stars {
  align-items: center;
  display: inline-flex;
  margin-right: 4px;
  min-width: 14px;
}
.rating-avg {
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue",
    sans-serif;
  font-size: 14px;
  position: relative;
  font-weight: 600;
}
.comments {
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue",
    sans-serif;
  font-size: 14px;
  line-height: 20px;
  padding-left: 4px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
.dot {
  color: rgb(113, 113, 113);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue",
    sans-serif;
  font-weight: 400;
  margin: 8px 8px 0px;
}
.address {
  min-width: 0px;
  margin-top: 4px;
  align-items: center;
  display: inline-flex;
}
.address-btn {
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 24px;
  transition: box-shadow 0.2s ease, transform 0.1s ease;
  background: transparent;
  border: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  text-align: inherit;
}
.address-content {
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue",
    sans-serif;
  font-size: 14px;
  position: relative;
  font-weight: 600;
  text-decoration: underline;
}
.right-side {
  display: flex;
  justify-content: flex-end;
}
.share-btn {
  margin-right: 20px;
}
.title-btn {
  border-radius: var(--go-h-jh-l);
  border-width: 1px;
  border-style: solid;
  transition: box-shadow 0.2s ease, transform 0.1s ease;
  border: none;
  background: transparent;
  margin-left: -8px;
  margin-right: -8px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 8px;
  cursor: pointer;
  margin: 0;
  text-align: center;
}
.title-btn-container {
  display: flex;
  align-items: center;
}
.svg-icon {
  margin-right: 8px;
}
</style>
