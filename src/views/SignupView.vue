<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useAuthStore } from "@/stores";

const schema = Yup.object().shape({
  username: Yup.string().required("輸入電話"),
  password: Yup.string().required("輸入密碼"),
});

function onSubmit(values, { setErrors }) {
  const authStore = useAuthStore();
  const { username, password } = values;

  return authStore.login(username, password).catch((error) => setErrors({ apiError: error }));
}
</script>

<template>
  <div class="signupview">
    <!-- <div class="alert alert-info">
      Username: test<br />
      Password: test
    </div> -->
    <div class="signup-container">
      <div class="signup-form-container">
        <h2>玉山 BNPL</h2>
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
          <div class="form-group">
            <div class="form-group">
              <label>電話</label>
              <Field placeholder="0909xxxxxx" name="username-reconfirm" class="form-control" type="text" />
            </div>
            <label>再次確認電話</label>
            <Field name="username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="form-group">
            <label>密碼</label>
            <Field name="password-reconfirm" class="form-control" type="password" />
          </div>
          <div class="form-group">
            <label>再次確認密碼</label>
            <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>

          <div class="form-group">
            <label>Email</label>
            <Field name="email" class="form-control" type="text" />
          </div>

          <div class="form-group">
            <label>職業</label>
            <Field name="job" class="form-control" type="text" />
          </div>

          <div class="form-group">
            <label>年資</label>
            <Field placeholder="若無填0即可" name="job-year" class="form-control" type="number" />
          </div>

          <div class="form-group">
            <label>教育程度</label>
            <Field name="education" class="form-control" as="select">
              <option>國小</option>
              <option>國中</option>
              <option>高中</option>
              <option>學士</option>
              <option>碩士</option>
              <option>博士</option>
              <option>其他</option>
            </Field>
          </div>

          <div class="form-group">
            <label>婚姻狀況</label>
            <Field name="education" class="form-control" as="select">
              <option>單身</option>
              <option>已婚</option>
              <option>其他</option>
            </Field>
          </div>

          <label>身份證正面照</label>
          <camera :resolution="{ width: 200, height: 100 }" ref="camera" autoplay> </camera>

          <div class="form-group">
            <button class="btn btn-primary" :disabled="isSubmitting">
              <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
              註冊
            </button>
          </div>
          <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{ errors.apiError }}</div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signupview {
  .signup-container {
    margin: auto;
    width: 400px;
    padding-top: 5vh;
    .signup-form-container {
      padding: 20px;
      background-color: white;
      font-size: 18px;
      border-radius: 10px;
      box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.4);
      min-height: 100px;

      button {
        margin-top: 10px;
        width: 100%;
        background-color: #00635e;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
      button:hover {
        background-color: #00635e60;
      }

      form {
        h2 {
          color: #00635e;
          text-align: center;
          font-family: "Segoe UI", Segoe, "Segoe WP", Tahoma, Verdana, Arial, "微軟正黑體", "Microsoft JhengHei",
            "新細明體", sans-serif;
        }

        input {
          margin-top: 10px;
          margin-bottom: 10px;
          width: 100%;
          border: 0;
          padding: 10px 0 10px 5px;
          border: 1px solid #ccc;
          position: relative;
          background: transparent;
        }

        button {
          margin-top: 10px;
          width: 100%;
          background-color: #00635e;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
        button:hover {
          background-color: #00635e60;
        }
      }
    }
  }
}
</style>
