import type {FormInstance} from 'element-plus'
import { ref } from "vue";
export interface loginFormInt {
    userName: string,
    passWord: string
}

export class InitData {
    loginForm: loginFormInt = {
        userName: '',
        passWord: ''
    };
    // 泛型
    loginFormRef = ref<FormInstance>()
}
