<template>
    <div class="login-box">
        <el-form
            ref="loginFormRef"
            :model="loginForm"
            status-icon
            :rules="rules"
            label-width="70px"
            class="loginForm"
        >
            <h1>管理系统</h1>
            <el-form-item label="账号：" prop="userName">
            <el-input v-model="loginForm.userName" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码：" prop="passWord">
            <el-input
                v-model="loginForm.passWord"
                type="password"
                autocomplete="off"
            />
            </el-form-item>
            <el-form-item>
            <el-button type="primary" class="submit-btn" @click="submitForm(loginFormRef)"
                >登录</el-button
            >
            <!-- <el-button @click="resetForm(loginFormRef)">Reset</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { InitData } from '../types/login';
import type {FormInstance} from 'element-plus'


export default defineComponent({
    setup () {
        const data = reactive(new InitData());
        const rules = {
            userName: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 6, max: 24, message: '账号长度需要在6-24之间', trigger: 'blur' },
            ],
            passWord: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 24, message: '密码长度需要在6-24之间', trigger: 'blur' },
            ]
        };
        const submitForm = (loginFormRef:FormInstance) => {
            loginFormRef.validate((valid:boolean) => {
                if(valid) {
                    alert('验证通过！')
                }
            })
        };
        return {
            ...toRefs(data),
            rules,
            submitForm
        }
    }
})
</script>

<style lang="scss" scoped>
    .login-box {
        width: 100%;
        height: 100%;
        background: url(../assets/bg.png);
        box-sizing: border-box;
        padding-top: 200px;
        .loginForm {
            width: 400px;
            padding: 20px;
            background-color: #fff;
            border-radius: 20px;
            margin: 0 auto;
        }
        .submit-btn {
            width: 100%;
        }
        h1{
            text-align: center;
            margin: 20px 0;
        }
    }
</style>