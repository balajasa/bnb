<template>
  <div class="card-container">
    <div class="">
      <span class="basic-cost"> $12,137 TWD </span> 晚

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
    </div>
    <div>入住 2023/5/11 退房 2023/5/12 旅客 1 人</div>

    <button>預訂</button>
    <div>你暫時不會被收費</div>
    <div>$12,137 TWD x 1晚 $12,137 TWD</div>
    <hr />
    <div>稅前總價 $12,137 TWD</div>
  </div>
</template>

<script setup></script>

<style>
.card-container {
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  width: 300px;
}
.basic-cost {
  font-size: 22px;
  font-weight: bold;
}
.rating {
  min-width: 0px;
  margin-top: 4px;
  align-items: center;
  display: flex;
  right: 0;
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
</style>
