<template>
  <div class="payment">
    <!-- 訂購人資訊 -->
    <div class="payment-seciton payment-form">
      <h3 class="payment-h3">訂購人資訊</h3>
      <div class="payment-info info--col2">
        <div class="payment-info-row">
          <label class="form-label" for="name">姓名</label>
          <input
            class="form-inp"
            id="name"
            v-model="order.customer_name"
            type="text"
            placeholder="王小明"
          />
        </div>
        <div class="payment-info-row">
          <label class="form-label" for="tel">電話</label>
          <input
            class="form-inp"
            v-model="order.customer_tel"
            id="tel"
            type="tel"
            placeholder="0910007874"
          />
        </div>
      </div>
      <div class="payment-info">
        <div class="payment-info-row">
          <label class="form-label" for="email">Email</label>
          <input
            class="form-inp"
            v-model="order.customer_email"
            id="email"
            type="text"
          />
        </div>
      </div>
      <div class="payment-info">
        <div class="payment-info-row">
          <label class="form-label" for="">特殊需求</label>
          <textarea
            class="form-textarea"
            v-model="order.customer_memo"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="如您有特殊需求，可以在此欄位註明。例如: 入住日期預計抵達時間，前往下榻處的交通方式，葷/素人數(若下榻處未供餐請忽略)"
          ></textarea>
        </div>
      </div>
      <div class="payment-hint">
        請注意，旅宿接單並不保證達成您所提出的需求，必須視住宿現場狀況而定
      </div>
    </div>

    <!-- 入住須知 -->
    <div class="payment-seciton payment-note">
      <h3 class="payment-h3">【露營約定】</h3>
      <ul class="payment-note-ul">
        <li class="payment-note-li">★勿隨意升火，以維護安全。</li>
        <li class="payment-note-li">
          ★營區電壓較低，僅提供低瓦數300瓦以下電器使用。
        </li>
        <li class="payment-note-li">★營區內孩童玩耍皆需家長自行全程陪同。</li>
        <li class="payment-note-li">★營地植栽維護不易，請珍惜花草樹木。</li>
        <li class="payment-note-li">★區內農場為私人區域，請勿隨意進入。</li>
        <li class="payment-note-li">★為維護園區安全，進出營區請減速慢行。</li>
        <li class="payment-note-li">
          ★營區提供完善衛浴設備，沐浴間24小時提供免費熱水，請珍惜使用。
        </li>
        <li class="payment-note-li">
          ★晚上10:00~早上08:00為管制時段，請勿大聲喧嘩，以免影響其他露友安寧。
        </li>
        <li class="payment-note-li">
          ★垃圾請放入垃圾袋內並確實分類，離開前請放置於回收場垃圾桶。
        </li>
        <li class="payment-note-li">
          ★化妝室內之馬桶及小便池請勿丟入雜物，以確保暢通。
        </li>
        <li class="payment-note-li">
          ★營區內的電源插座僅提供小電補光用，禁止使用高功率電器產品，如電磁爐、暖爐、電鍋、烤箱、冷氣等，如未依規定而使線路燒毀，請照價賠償。
        </li>
        <li class="payment-note-li">★露營區內嚴禁營火﹑點火把﹑放爆竹。</li>
        <li class="payment-note-li">
          ★營地內嚴禁使用卡拉OK及施放任何型式種類的鞭炮煙火。
        </li>
        <li class="payment-note-li">
          ★營區屬開放空間，個人安全/用品/財務請自行負責。
        </li>
        <li class="payment-note-li">
          ★營區內禁止賭博、吸食毒品及聚眾滋事等一切違法行為，經管理員勸導仍未改善者，將請您主動離開，露營費用沒收不予退還。
        </li>
        <li class="payment-note-li">
          ★露營野炊，請特別留意食物衛生與保存，若食用自備餐飲而身體不適，請自行負責。
        </li>
        <li class="payment-note-li">
          ★戶外蚊蟲多，請做好防蚊準備，並穿著長袖衣物及長褲，避免蚊蟲叮咬。
        </li>
        <li class="payment-note-li">
          ★露宿大自然，請留意野生動物，夜間請避開黑暗處，也不要餵食。
        </li>
        <li class="payment-note-li">
          ★如您是下雨天不露營者，建議不要提前預訂營位，可於露營日當天確定天氣狀況，適合您露營再電話聯繫營區管理員訂位，以免造成營區與露營者之間的困擾。
        </li>
        <li class="payment-note-li">
          ★以上規範為維護露營者之權益，請您配合，違反屢勸不聽者取消露營資格。
        </li>
      </ul>
      <h3 class="payment-h3">【個別旅客訂房定型化契約】</h3>
      <ol class="payment-note-ol">
        <li class="payment-note-ol-li">
          住宿當日逢颱風或地震等不可抗拒之因素 ( 以當地縣市政府頒布狀況為準則 )
          時， 無條件退回全額訂金或保留訂金。
        </li>
        <li class="payment-note-ol-li">
          颱風改期或取消以當地或住客居住地的陸上颱風警報為主，以中央氣象局宣布為主。
        </li>
        <li class="payment-note-ol-li">
          變更住宿日期請於 14 日前通知，將為您保留訂金六個月，未於 14
          日前通知者則無法變更住宿日期，依照消保會規定退還部分訂金處理。
        </li>
        <li class="payment-note-ol-li">
          取消訂房訂金退還標準：( 依據消保會規定 )
        </li>
        <ol class="payment-note-sub-ol">
          <li class="payment-note-sub-li">
            預定住宿日前 14 日取消訂房，可退回全部訂金
          </li>
          <li class="payment-note-sub-li">
            預定住宿日前 10 日至 13 日取消訂房者，可退回 70% 的訂金
          </li>
          <li class="payment-note-sub-li">
            預定住宿日前 7 日至 9 日取消訂房者，可退回 50% 的訂金
          </li>
          <li class="payment-note-sub-li">
            預定住宿日前 4 日至 6 日取消訂房者，可退回 40% 的訂金
          </li>
          <li class="payment-note-sub-li">
            預定住宿日前 2 日至 3 日取消訂房者，可退回 30% 的訂金
          </li>
          <li class="payment-note-sub-li">
            預定住宿日前 1 日取消訂房者，可退回 20% 的訂金
          </li>
          <li class="payment-note-sub-li">
            預定住宿日當天取消者，不退回訂金。
          </li>
        </ol>
      </ol>
    </div>

    <!-- 訂單細項 -->
    <div class="payment-seciton payment-order">
      <h3 class="payment-h3">訂單細項</h3>
      <div class="payment-order-header">
        {{ orderInfo.start }} - {{ orderInfo.end }} - ({{
          orderInfo.people.adults
        }}
        成人, {{ orderInfo.people.children }} 孩童)
      </div>
      <div class="payment-order-body">
        <div class="payment-card">
          <template v-for="[key, orderDetail] in orders"  :index="key" :key="key">
            <img
              class="payment-card-img"
              :src="'http://34.31.125.18:8081'+orderDetail.room.images[0]"
              alt=""
            />
            <div class="payment-card-infoWrap">
              <div class="payment-card-info">
                {{ orderDetail.room.title }}<br />
                官網優惠預訂價格<br />
              </div>
              <div class="payment-card-info info--col2">
                <span>x {{ orderDetail.count }} 間</span>
                <span>TWD {{ orderDetail.count * orderDetail.room.totalPrice }}</span>
              </div>
              <!-- <div class="payment-card-info info--col2">
                <span>+ 4 人</span>
                <span>TWD 1,800</span>
              </div> -->
              <!-- <div class="payment-card-info info--col2">
                <span>有夜衝</span>
                <span>TWD -900</span>
              </div> -->
              <div class="payment-card-info info--right">
                房價已包含稅金及其他費用<span>(詳情)</span>
              </div>
            </div>
          </template>

          <div class="payment-card-cancel">
            取消政策 個別旅客訂房定型化契約
            <ol class="payment-card-ol">
              <li class="payment-card-li">
                住宿當日逢颱風或地震等不可抗拒之因素 (
                以當地縣市政府頒布狀況為準則 ) 時，
                無條件退回全額訂金或保留訂金。
              </li>
              <li class="payment-card-li">
                颱風改期或取消以當地或住客居住地的陸上颱風警報為主，以中央氣象局宣布為主。
              </li>
              <li class="payment-card-li">
                變更住宿日期請於14
                日前通知，將為您保留訂金六個月，未於14日前通知者則無法變更住宿日期，依照消保會規定退還部分訂金處理。
              </li>
              <li class="payment-card-li">
                取消訂房訂金退還標準：( 依據消保會規定 )
              </li>
              <ul class="payment-card-sub-ul">
                <li class="payment-card-sub-li">
                  預定住宿日前14日取消訂房，可退回全部訂金
                </li>
                <li class="payment-card-sub-li">
                  預定住宿日前10日至13日取消訂房者，可退回 70% 的訂金
                </li>
                <li class="payment-card-sub-li">
                  預定住宿日前7日至九日取消訂房者，可退回 50% 的訂金
                </li>
                <li class="payment-card-sub-li">
                  預定住宿日前4日至6日取消訂房者，可退回 40% 的訂金
                </li>
                <li class="payment-card-sub-li">
                  預定住宿日前2日至3日取消訂房者，可退回 30% 的訂金
                </li>
                <li class="payment-card-sub-li">
                  預定住宿日前1日取消訂房者，可退回 20% 的訂金
                </li>
                <li class="payment-card-sub-li">
                  預定住宿日當天取消者，不退回訂金。
                </li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- 訂單總額 -->
    <div class="payment-seciton payment-price">
      <h3 class="payment-h3">付款詳情</h3>
      <div class="payment-price-row">
        <span>房費 (房價已包含稅金及其他費用)</span>
        <span>TWD {{orderInfo.totalPrice}}</span>
      </div>
      <!-- <div class="payment-price-row">
        <span>加購</span>
        <span>TWD 500</span>
      </div> -->
      <div class="payment-price-row">
        <span>總價</span>
        <span>TWD {{orderInfo.totalPrice}}</span>
      </div>
    </div>

    <!-- 付款方式 -->
    <div class="payment-seciton payment-choice">
      <h3 class="payment-h3">選擇付款方式</h3>
      <div class="payment-choice-type">
        <span class="choice-radio">O ATM</span>
        <span class="choice-radio">O 信用卡</span>
      </div>
      <div class="payment-choice-warning">
        請注意，如選「ATM/匯款」系統不接受以下付款方式：無摺存款/劃撥/國際匯款/臨櫃匯款
      </div>
      <div class="payment-choice-note">
        請注意<br />
        <ul class="payment-choice-ul">
          <li class="payment-choice-li">
            送出後下一頁會連結至所選擇金流頁面，請耐心等候訂購成功頁面出現，請勿在金流等候頁面關閉視窗、重新整裡或點選回上頁，以免造成訂購失敗或重複付款事宜。
          </li>
          <li class="payment-choice-li">
            旅宿業者或訂房系統商不會以任何形式要求您前往操作ATM解除扣款、變更付款方式、補繳金額、要求轉帳、解除分期、購券刷退退款等操作，亦不會要求您提供信用卡帳號資料、銀行帳號相關資料。若接到可疑電話，請務必致電旅宿業者確認，或撥打警政署反詐騙諮詢專線165，請勿回撥可疑來電，提醒您務必提高警覺！
          </li>
        </ul>
      </div>
      <div class="payment-choice-accept">
        口 我同意接受以上所述的預訂條款和條件
      </div>
      <div class="payment-choice-checkout">
        <button class="btn btn--prev" @click="prev()">上一步</button>
        <button class="btn btn--main" @click="sendOrder()">送出訂單</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { useOrderStore } from "@/stores/useOrder";
import { storeToRefs } from "pinia";

const orderStore = useOrderStore();
const { orders, orderInfo, total } = storeToRefs(orderStore);
const domain = "http://0.0.0.0:8088";
const order = reactive({
  customer_name: "Ami",
  customer_tel: "09262247",
  customer_email: "gz2wa@gmail.com",
  customer_memo: "",
});


onMounted(() => {
  console.log(orders)
})

function prev() {
  history.go(-1)　
}

// sendOrder
function sendOrder() {
  if([order.customer_email,order.customer_name,order.customer_tel].includes('')){
    alert('資料填寫不完全');
    return;
  }
  if(orders.value.size === 0){
    alert('房間資訊錯誤');
    return;
  }
  const orderdata = {
    customer_name: order.customer_name,
    customer_tel: order.customer_tel,
    customer_email  : order.customer_email,
    customer_memo: order.customer_memo,
    start_date: orderInfo.value.start.replaceAll('/', '-'),
    end_date: orderInfo.value.end.replaceAll('/', '-'),
    total_price: orderInfo.value.totalPrice,
    orders: Array.from(orders.value).map(data=> ({
        room_id: data[1].room.room_id,
        count: data[1].count,
        origin_price: data[1].room.totalPrice,
        add_people: 0,
        night_out: true,
        discount_price: data[1].room.totalPrice,
      })),
    addon: []
  }
  console.log(orderdata);
  console.log(orders.value);


  fetch(
    `${domain}/api/order`,
    {
      method: "POST",
      body: JSON.stringify(orderdata),
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      // setRoomStock(response, payload);

      if(response.msg !== ""){
        alert(response.msg);
      } else {
        console.log(response.res.order_id);
      }
    });

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

.payment
  max-width: 600px
  padding: 10px 15px
  margin: 0 auto
.payment-seciton
  border: 1px solid rgb(221, 221, 221)
  border-radius: 12px
  padding: 24px
  font-size: 15px
  margin-bottom: 40px
.payment-info
  width: 100%
.payment-h3
  font-size: 22px
  color: #222

.payment-hint
  font-size: 13px
// form
.payment-info-row
  margin-bottom: 14px
.form-inp,
.form-textarea
  width: 100%
  display: inline-block
  border-radius: 8px
  border: 1px solid rgb(221, 221, 221)
  padding: 6px
  font-size: 15px
.form-inp
  height: 40px
.form-label
  display: block
  margin-bottom: 4px
  line-height: 20px
  color: #222222
  font-size: 15px
  font-weight: 600

.payment-note-ul
  list-style: none
  padding-left: 10px
  line-height: 26px

// order
.payment-order-header
  border-bottom: 1px solid rgb(221, 221, 221)
  margin-bottom: 30px
  padding-bottom: 20px
.payment-card-img
  width: 100%
  max-width: 100%
.payment-card-infoWrap
  margin-bottom: 40px
.payment-card-info
  display: flex
  &.info--col2
    justify-content: space-between
  &.info--right
    justify-content: right

.payment-choice-accept
  margin-bottom: 30px

.payment-price-row,
.payment-choice-checkout
  display: flex
  justify-content: space-between

.btn
  &.btn--prev,
  &.btn--main
    background: none
    border: none
  &.btn--main
    background-size: 200% 200%
    transition: opacity 1.25s
    background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)
    background-image: radial-gradient( circle at center,#FF385C 0%,#e61e4d 27.5%,#e31c5f 40%,#d70466 57.5%,#bd1e59 75%,#bd1e59 100% )
    color: white
    width: 60%
    height: 48px
    border-radius: 8px
    font-size: 17px
</style>
