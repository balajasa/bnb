<template>
<div class="page-complete-order">
  <div class="complete-container">
    <div class="order-success">訂購尚未完成</div>
    <div class="form-info order-status">
      <div class="txt-notice">請注意，若未於 <span>2023-04-26 23:50:00</span> 內轉帳付款，系統將自動取消房間保留。</div>
      請就近選擇任何銀行或郵局的「ATM自動提款機」或利用「網路ATM」服務完成轉帳，訂單才會正式成立。<br/>
      繳款期限不受例假日影響，需於入住前完成付款。<br/>
      轉帳完成後，您會收到系統發送的預訂付款完成通知Email。
    </div>

    <div class="form-info transfer-info">
      <div class="txt-title">轉帳資訊</div>
      <div class="txt-transfer">轉帳銀行：國泰世華銀行(代號 013) 光華分行</div>
      <div class="txt-transfer">帳戶名稱：奧丁丁旅行社股份有限公司</div>
      <div class="txt-transfer">轉帳號碼：55400426002792</div>
      <div class="txt-transfer">轉帳期限：2023-04-26 23:50:00</div>

      <div class="txt-money">轉帳金額 <span>（訂金）</span>：TWD 800</div>
      <div class="txt-remind">
        <li>轉帳帳號僅提供本次交易使用，若金額不符轉帳交易將會失敗。</li>
        <li>請留意臨櫃現金匯款會產生人工作業時間，可能延遲帳款入帳時間，導致系統判定訂單失效，故建議使用ＡＴＭ匯款。</li>
      </div>
    </div>
    <div class="form-info order-info">
      <div class="txt-title">訂單資訊</div>

      <div class="order-date">2023/06/20 - 2023/06/21<span>( 2 天 1 晚 )</span></div>
      <div class="order-people">2 成人, 0 孩童, 0 嬰幼兒</div>

      <div class="info-group">
        <label>訂單編號</label>
        <span>OBE67910490323042501</span>
      </div>
      <div class="info-group">
        <label>預定晚數</label>
        <span>1 晚</span>
      </div>

      <div class="order-row">
        <div class="info-group">
          <label>剩餘尾款（ 請於現場付清 ）</label>
          <span>TWD 0</span>
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
      <div class="info-group">
        <label>姓氏</label>
        <span>王</span>
      </div>
      <div class="info-group">
        <label>名字</label>
        <span>小明</span>
      </div>
      <div class="info-group">
        <label>國籍</label>
        <span>Taiwan (台灣)</span>
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
  </div>
</div>
</template>

<style lang="sass" scoped>
.page-complete-order
  margin-top: 40px
.complete-container
  width: 100%
  margin-right: auto
  margin-left: auto
  padding-right: 16px
  padding-left: 16px
  @media (min-width: 576px)
    max-width:576px
  @media (min-width: 768px)
    max-width:768px
  @media (min-width: 992px)
    max-width:992px
  @media (min-width: 1200px)
    max-width:1200px
.order-success
  font-size: 24px
  font-weight: 700
  text-align: center
  color: #f5cf82
.order-status
  background-color: #fefaef
.txt-notice
  margin-bottom: 20px
  span
    color: #8cb1be

.form-info
  border: 1px solid #e9edef
  margin-bottom: 24px
  border-radius: 4px
  padding: 24px

.txt-title
  font-size: 18px
  font-weight: 400
  margin-bottom: 24px

// .txt-transfer

.txt-money
  border-bottom: 1px solid #e9edef
  span
    color: #8cb1be

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

.order-row
  display: flex
  width: 100%
  justify-content: space-between
  border-bottom: 1px solid #e9edef
  .info-group
    &:not(:first-child)
      padding-left: 24px
      border-left: 1px solid #e9edef


</style>
