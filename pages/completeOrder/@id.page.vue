<template>
  total: {{ total }}
<div class="page-complete-order">
  <div class="container">
    <div class="status-title status-uncomplete">訂購尚未完成</div>
    <div class="form-info order-status">
      <div class="form-content">
        <div class="txt-notice">請注意，若未於 <span>2023-04-26 23:50:00</span> 內轉帳付款，系統將自動取消房間保留。</div>
        請就近選擇任何銀行或郵局的「ATM自動提款機」或利用「網路ATM」服務完成轉帳，訂單才會正式成立。<br/>
        繳款期限不受例假日影響，需於入住前完成付款。<br/>
        轉帳完成後，您會收到系統發送的預訂付款完成通知Email。
      </div>
    </div>

    <div class="form-info transfer-info">
      <div class="form-content">
        <div class="txt-title">轉帳資訊</div>
        <div class="txt-transfer">轉帳銀行：國泰世華銀行(代號 013) 光華分行</div>
        <div class="txt-transfer">帳戶名稱：奧丁丁旅行社股份有限公司</div>
        <div class="txt-transfer">轉帳號碼：55400426002792</div>
        <div class="txt-transfer">轉帳期限：2023-04-26 23:50:00</div>
      </div>
      <div class="transfer-money">轉帳金額 <span class="txt-deposit">（訂金）</span>：<span class="txt-money">TWD 800</span></div>
      <div class="form-content">
        <div class="txt-remind">
          <li>轉帳帳號僅提供本次交易使用，若金額不符轉帳交易將會失敗。</li>
          <li>請留意臨櫃現金匯款會產生人工作業時間，可能延遲帳款入帳時間，導致系統判定訂單失效，故建議使用ＡＴＭ匯款。</li>
        </div>
      </div>
    </div>

    <div class="form-info order-info">
      <div class="form-content">
        <div class="txt-title">訂單資訊</div>

        <div class="order-date">- 2023/06/20 - 2023/06/21<span>( 2 天 1 晚 )</span></div>
        <div class="order-people">- 2 成人, 0 孩童, 0 嬰幼兒</div>

        <div class="info-group">
          <label>訂單編號</label>
          <span>OBE67910490323042501</span>
        </div>
        <div class="info-group">
          <label>預定晚數</label>
          <span>1 晚</span>
        </div>
      </div>

      <div class="order-row">
        <div class="info-group">
          <label>剩餘尾款（ 請於現場付清 ）</label>
          <span>TWD <span class="txt-money">0</span></span>
        </div>
        <div class="info-group">
          <label>待付金額</label>
          <span>TWD 800</span>
        </div>
        <div class="info-group">
          <label>總價</label>
          <span>TWD 800</span>
        </div>
      </div>
      <div class="form-content">
        <div class="info-group">
          <label>姓氏</label>
          <span>王</span>
        </div>
        <div class="info-group">
          <label>名字</label>
          <span>小明</span>
        </div>
        <div class="info-group">
          <label>電話</label>
          <span>0900000000</span>
        </div>
        <div class="info-group">
          <label>Email</label>
          <span>aaaa@aaa.aaa</span>
        </div>
      </div>
      <div class="info-group other-group">
        <label>特殊需求</label>
        <span>測試用測試用測試用測試用測試用</span>
      </div>
    </div>

    <div class="room-order-title">房型訂單</div>
    <div class="form-info room-order-info">
      <div class="form-content">
        <div class="txt-title">碎石區營地</div>
        <div class="order-content">
          <div class="order-detail">
              <div class="detail-title">
                <div class="order-type">官網優惠預訂價格</div>
                <span class="detail-date">2023-06-20</span>
              </div>
              <div class="">
                <div class="detail-content">
                  <div class="detail-group">
                    <div>數量：</div>
                    <div>1 間</div>
                  </div>
                  <div class="detail-group">
                    <div>總價：</div>
                    <div class="txt-amount"><span>TWD</span> 800</div>
                  </div>
                  <div class="detail-info">(房價已包含稅金及其他費用)</div>
                </div>
              </div>
          </div>
          <div class="order-detail">
            <div class="detail-title">
              <div class="order-type">官網優惠預訂價格</div>
              <span class="detail-date">2023-06-20</span>
            </div>
            <div class="">
              <div class="detail-content">
                <div class="detail-group">
                  <div>數量：</div>
                  <div>1 間</div>
                </div>
                <div class="detail-group">
                  <div>總價：</div>
                  <div class="txt-amount"><span>TWD</span> 800</div>
                </div>
                <div class="detail-info">(房價已包含稅金及其他費用)</div>
              </div>
            </div>
          </div>
        </div>

        <div class="cancellation-policy">
          <div class="policy-title">取消政策</div>
          <div class="txt-policy">個別旅客訂房定型化契約</div>
          <div class="list-policy">
            1. 住宿當日逢颱風或地震等不可抗拒之因素 ( 以當地縣市政府頒布狀況為準則 ) 時， 無條件退回全額訂金或保留訂金。<br>
            2. 颱風改期或取消以當地或住客居住地的陸上颱風警報為主，以中央氣象局宣布為主。<br>
            3. 變更住宿日期請於14 日前通知，將為您保留訂金六個月，未於14日前通知者則無法變更住宿日期，依照消保會規定退還部分訂金處理。<br>
            4. 取消訂房訂金退還標準：( 依據消保會規定 )<br>
            a. 預定住宿日前14日取消訂房，可退回全部訂金<br>
            b. 預定住宿日前10日至13日取消訂房者，可退回 70% 的訂金<br>
            c. 預定住宿日前7日至九日取消訂房者，可退回 50% 的訂金<br>
            d. 預定住宿日前4日至6日取消訂房者，可退回 40% 的訂金<br>
            e. 預定住宿日前2日至3日取消訂房者，可退回 30% 的訂金<br>
            f. 預定住宿日前1日取消訂房者，可退回 20% 的訂金<br>
            g. 預定住宿日當天取消者，不退回訂金。<br>
          </div>
        </div>
      </div>


      <div class="form-content">
        <div class="txt-title">免搭帳通舖</div>
        <div class="order-content">
          <div class="order-detail">
            <div class="detail-title">
              <div class="order-type">官網優惠預訂價格</div>
              <span class="detail-date">2023-06-20</span>
            </div>
            <div class="detail-content">
              <div class="detail-group">
                <div>數量：</div>
                <div>1 間</div>
              </div>
              <div class="detail-group">
                <div>總價：</div>
                <div class="txt-amount"><span>TWD</span> 2000</div>
              </div>
              <div class="detail-info">(房價已包含稅金及其他費用)</div>
            </div>
          </div>
          <div class="order-detail">
            <div class="detail-title">
              <div class="order-type">官網優惠預訂價格</div>
              <span class="detail-date">2023-06-20</span>
            </div>
            <div class="detail-content">
              <div class="detail-group">
                <div>數量：</div>
                <div>1 間</div>
              </div>
              <div class="detail-group">
                <div>總價：</div>
                <div class="txt-amount"><span>TWD</span> 800</div>
              </div>
              <div class="detail-info">(房價已包含稅金及其他費用)</div>
            </div>
          </div>
        </div>

        <div class="cancellation-policy">
          <div class="policy-title">取消政策</div>
          <div class="txt-policy">個別旅客訂房定型化契約</div>
          <div class="list-policy">
            1. 住宿當日逢颱風或地震等不可抗拒之因素 ( 以當地縣市政府頒布狀況為準則 ) 時， 無條件退回全額訂金或保留訂金。<br>
            2. 颱風改期或取消以當地或住客居住地的陸上颱風警報為主，以中央氣象局宣布為主。<br>
            3. 變更住宿日期請於14 日前通知，將為您保留訂金六個月，未於14日前通知者則無法變更住宿日期，依照消保會規定退還部分訂金處理。<br>
            4. 取消訂房訂金退還標準：( 依據消保會規定 )<br>
            a. 預定住宿日前14日取消訂房，可退回全部訂金<br>
            b. 預定住宿日前10日至13日取消訂房者，可退回 70% 的訂金<br>
            c. 預定住宿日前7日至九日取消訂房者，可退回 50% 的訂金<br>
            d. 預定住宿日前4日至6日取消訂房者，可退回 40% 的訂金<br>
            e. 預定住宿日前2日至3日取消訂房者，可退回 30% 的訂金<br>
            f. 預定住宿日前1日取消訂房者，可退回 20% 的訂金<br>
            g. 預定住宿日當天取消者，不退回訂金。<br>
          </div>
        </div>
      </div>

    </div>







    <div class="room-order-title">加購商品</div>
    <div class="form-info room-add-info">
      <div class="form-content">
        <div class="order-content">
          <div class="add-detail">
            <div class="add-box">
              <div class="add-name">睡袋</div>
              <div class="add-amount">
                <label>總價：</label>
                <div class="txt-amount"><span>TWD</span> 800</div>
              </div>
            </div>
            <div class="add-date">
              <div class="txt-add-date">2023-07-11</div>
              <div class="add-num">
                <span class="txt-add-num">2 人</span>
                <span>TWD 200</span>
              </div>
            </div>
          </div>
        </div>

        <div class="cancellation-policy">
          <div class="policy-title">取消政策</div>
          <div class="txt-policy">個別旅客訂房定型化契約</div>
          <div class="list-policy">
            1. 住宿當日逢颱風或地震等不可抗拒之因素 ( 以當地縣市政府頒布狀況為準則 ) 時， 無條件退回全額訂金或保留訂金。<br>
            2. 颱風改期或取消以當地或住客居住地的陸上颱風警報為主，以中央氣象局宣布為主。<br>
            3. 變更住宿日期請於14 日前通知，將為您保留訂金六個月，未於14日前通知者則無法變更住宿日期，依照消保會規定退還部分訂金處理。<br>
            4. 取消訂房訂金退還標準：( 依據消保會規定 )<br>
            a. 預定住宿日前14日取消訂房，可退回全部訂金<br>
            b. 預定住宿日前10日至13日取消訂房者，可退回 70% 的訂金<br>
            c. 預定住宿日前7日至九日取消訂房者，可退回 50% 的訂金<br>
            d. 預定住宿日前4日至6日取消訂房者，可退回 40% 的訂金<br>
            e. 預定住宿日前2日至3日取消訂房者，可退回 30% 的訂金<br>
            f. 預定住宿日前1日取消訂房者，可退回 20% 的訂金<br>
            g. 預定住宿日當天取消者，不退回訂金。<br>
          </div>
        </div>
      </div>
    </div>

    <div class="form-info order-info">
      <div class="form-content">
        <div class="txt-title">旅館資訊</div>
        <div class="info-group">
          <label>旅館名稱</label>
          <span>家霖農場 Garin Farm - 谷關露營</span>
        </div>
        <div class="info-group">
          <label>通訊地址</label>
          <span>42444台灣台中市和平區東關路一段台電巷122-2號</span>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="container">
      <div class="footer-name">家霖農場 Garin Farm - 谷關露營</div>
      <div class="foonter-content">
        <a class="txt-contacts" href="http://maps.google.com/maps?q=42444台灣台中市和平區東關路一段台電巷122-2號" target="_blank">
          <i class="owl-location"></i><span>42444台灣台中市和平區東關路一段台電巷122-2號</span>
        </a>
        <a class="txt-contacts" href="tel:0931 611396">
          <i class="owl-phone"></i><span>0931 611396</span>
        </a>
        <a class="txt-contacts" href="https://www.facebook.com/garinfarm168/" target="_blank">
          <i class="owl-earth"></i><span>家霖農場 Garin Farm - 谷關露營</span>
        </a>
      </div>
      <div class="copyright">Copyright © 2023 塑料姐妹©</div>




      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onMounted } from "vue";
import { useOrderStore } from '@/stores/useOrder';
import { storeToRefs } from 'pinia';

const order = useOrderStore();
const {  orders, total } = storeToRefs(order);


let orderInfo = ref({})

onMounted(() => {
  const url = "http://35.221.193.60/mock/153/api/order_info/123123";
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      orderInfo.value = response.res.order
    });
});
</script>


<style lang="sass" scoped>
@import "@/styles/layout"

.page-complete-order
  margin-top: 40px

.status-title
  font-size: 24px
  font-weight: 700
  text-align: center
  margin-bottom: 24px

.status-uncomplete
  color: #f7ac15

.order-status
  background-color: #fefaef
  font-size: 14px
  color: #1d1f20

.txt-notice
  margin-bottom: 20px
  color: #1d1f20
  span
    color: #078abc

.form-info
  border: 1px solid #e9edef
  margin-bottom: 24px
  border-radius: 4px
  padding: 24px 0

.form-content
  padding: 0 24px
  &:not(:first-child)
    border-top: 1px solid #e9edef
    padding-top: 24px



.txt-title
  font-size: 18px
  font-weight: 400
  margin-bottom: 24px

.txt-transfer
  margin-bottom: 8px
  color: #1d1f20
  font-size: 14px

.transfer-money
  border-bottom: 1px solid #e9edef
  padding: 16px 24px 24px 24px
  margin-bottom: 20px
  font-size: 16px

.txt-remind
  font-size: 12px
  color: #1d1f20

.txt-deposit
  font-size: 14px

.txt-money
  color: #109fc2
  font-weight: bold


.info-group
  display: flex
  flex-direction: column
  margin-bottom: 24px
  label
    margin-bottom: 8px
    font-size: 16px
    color: #1d1f20
  span
    font-size: 14px
    color: #686e74
    .txt-money
      color: #109fc2
      font-weight: bold


.other-group
  padding: 24px 24px 0 24px
  border-top: 1px solid #e9edef

.order-row
  display: flex
  width: 100%
  justify-content: space-between
  border-bottom: 1px solid #e9edef
  padding: 0 24px
  margin-bottom: 24px
  .info-group
    width: 100%
    &:not(:first-child)
      padding-left: 24px
      border-left: 1px solid #e9edef

.room-order-title
  font-weight: 700
  padding: 24px 0
  font-size: 18px

.order-content
  box-shadow: 0 15px 30px -10px rgba(92,101,107,.15)
  display: flex
  flex-direction: column
  margin-bottom: 16px
  border: 1px solid #d1d7dd
  border-top: 0
  border-radius: 4px

.order-detail
  display: flex
  justify-content: space-between
  padding: 24px 16px
  border-top: 1px solid #d1d7dd
  &:first-child
    border-radius: 4px 4px 0
  &:last-child
    border-radius: 0 0 4px 4px

.detail-title
  display: inline-flex
  flex-direction: column

.order-type
  font-size: 16px
  margin-bottom: 4px
  font-weight: 400


.detail-date
  font-size: 14px
  color: #3c4145
  margin-bottom: 16px

.detail-content
  display: inline-flex
  flex-direction: column

.detail-group
  display: inline-flex
  justify-content: space-between
  font-size: 14px
  color: #686e74
  min-width: 210px


.add-detail
  display: flex
  flex-direction: column
  // padding: 24px 16px
  border-top: 1px solid #d1d7dd
  &:first-child
    border-radius: 4px 4px 0
  &:last-child
    border-radius: 0 0 4px 4px

.add-box
  padding: 24px 16px



.add-name
  margin-bottom: 16px

.add-amount
  display: flex
  justify-content: flex-end
  font-size: 14px
  color: #686e74
  label
    margin-right: 32px
    font-size: 14px
    color: #696E77


.add-date
  display: flex
  font-size: 14px
  color: #1d1f20
  border-top: 1px solid #d1d7dd
  padding: 16px

.txt-add-date
  margin-right: auto
  color: #1d1f20

.add-num
  display: flex
  color: #1d1f20

.txt-add-num
  margin-right: 40px



.txt-amount
  color: #078abc
  span
    color: #686e74
    font-size: 12px

.detail-info
  margin-top: 8px
  font-size: 14px
  text-align: right
  color: #686e74

.order-date
  span
    font-size: 12px
    color: #686e74
    margin-left: 8px

.order-people, .order-date
  margin-bottom: 16px


.txt-policy
  margin-bottom: 24px
  font-size: 14px
  color: #686e74

.cancellation-policy
  margin-bottom: 24px

.policy-title
  color: #000
  margin-bottom: 24px
  font-size: 14px

.list-policy
  line-height: 24px
  color: #686e74
  font-size: 14px

.footer
  background-color: #f8fafc
  padding: 24px 0

.footer-name
  color: #3c4145
  font-weight: 500
  font-size: 20px
  padding-bottom: 16px
  border-bottom: 1px solid #d1d7dd

.foonter-content
  padding: 24px 0
  display: flex
  flex-direction: column

.txt-contacts
  margin-bottom: 16px
  color: #3c4145
  text-decoration: none
  display: inline-flex
  align-items: center
  font-size: 12px

.copyright
  text-align: right
  font-size: 12px
  color: #686e74
</style>
