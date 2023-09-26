<template>
  <div class="buyview">
    <div class="buy-container">
      <h3>PCOFFICE電商 快速到貨</h3>
      <div class="buy-view-container">
        <table>
          <tr>
            <th>商品名稱</th>
            <th>數量</th>
            <th>價格</th>
          </tr>
          <tr>
            <td>Apple 第十代 iPad 10.9吋 64G WiFi 藍色 (MPQ13TA/A)</td>
            <td>1</td>
            <td>NT$ 13,857</td>
          </tr>
        </table>
      </div>
      <h4 style="font-weight: bold">付款方式：</h4>
      <div>
        <h4>Pe錢包</h4>
      </div>
      <div>
        <h4 @click="$router.push('/login')">玉山BNPL</h4>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.buyview {
  .buy-container {
    margin-top: 10vh;
    h3 {
      font-family: "Segoe UI", Segoe, "Segoe WP", Tahoma, Verdana, Arial, "微軟正黑體", "Microsoft JhengHei", "新細明體",
        sans-serif;
      margin-bottom: 50px;
    }
    div {
      margin: 10px 0 10px 0;
      h4 {
        cursor: pointer;
        color: blue;
        font-family: "Segoe UI", Segoe, "Segoe WP", Tahoma, Verdana, Arial, "微軟正黑體", "Microsoft JhengHei",
          "新細明體", sans-serif;
        display: contents;
      }
      h4:hover {
        color: rgba(0, 0, 255, 0.452);
      }
    }
    .buy-view-container {
      background-color: white;
      font-size: 18px;
      border-radius: 10px;
      box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.4);
      min-height: 100px;
      table {
        tr {
          th {
            padding: 10px;
            background-color: rgba(255, 199, 126, 0.774);
            text-align: center;
            width: 500px;
          }
          td {
            padding-top: 10px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
