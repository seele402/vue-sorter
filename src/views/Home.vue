<template>

    <div class="mainContainer">
        <div class="subContainer">
            <div class="item_1">Current contetstants</div>
            <table class="contestantsTable">
                <thead>
                    <tr align="center">
                        <th class="tableHeaderId">Number</th>
                        <th class="tableHeaderName">Name</th>
                        <th class="tableHeaderImg">Image</th>
                    </tr>
                 </thead>
                <tbody>
                    <tr align="left" v-for="(contestant, key) in contestants" :key="key">
                        <td align="center" class="tableBodyId">{{key}}</td>
                        <td class="tableBodyName">
                            <input class="inputName" v-model="contestant.name"/>
                        </td>
                        <td class="tableBodyImg">
                            <input class="inputImg" v-model="contestant.img"/>
                        </td>
                        <td class="tableBodyButtons">
                            <button class="deleteButton" @click="deleteContestant(key)"><img/></button>
                        </td>
                    </tr>
                    <tr>
                        <td><button class="AddButton" @click="addContestant()">Add new</button></td>
                    </tr>
                </tbody>
            </table>
            <router-link :to="{name: 'battlePage' }" class="startButton">Start</router-link>
            
        </div>
    </div>

    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useContestantsStore } from '../stores/contestants'

const storeContestants = useContestantsStore()
export default defineComponent({
    setup(){
        return {
            contestants: storeContestants.contestants,
            addContestant: storeContestants.addContestant,
            deleteContestant: storeContestants.deleteContestant,           
        }
    },
})
</script>

<style lang="scss">
%table-border{
    border: solid;
    border-color: $tblborder;
}
%table-body{
    @extend %table-border;
    padding: 10px;
}
%input-base{
    background-color: #282828;
    border: none;
    font-size: medium;
}

.mainContainer{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;  
    align-content: center;
    align-items: center;
    overflow-y: hidden;
    height: 60vh;
    .subContainer{
        background-color: #282828;
        border: solid;
        border-color: #252525;
        width: $subContainerWidth;
        overflow-x: hidden;
        overflow-y: scroll;
        .item_1{
            text-align: center;
            margin-top: 5px;
            margin-top: 15px;
            margin-bottom: 30px;
        }
        .contestantsTable{
            @extend %table-border;
            border-collapse: collapse;
            width: $subContainerWidth;
            table-layout: fixed;
            max-height: 60vh;
            overflow-x: hidden;
            .tableHeaderId{
                @extend %table-body;
                width: $subContainerWidth * (1/8);
            }
            .tableHeaderName{
                @extend %table-body;
                width: $subContainerWidth * (1/5);
            }
            .tableHeaderImg{
                @extend %table-body;
                width: $subContainerWidth * (1/1.8);
            }
            .tableBodyId{
                @extend %table-body;
            }
            .tableBodyName{
                @extend %table-body;
                .inputName{
                    width: $subContainerWidth * (1/5);
                    @extend %input-base
                }
            }
            .tableBodyImg{
                @extend %table-body;
                overflow-x: scroll;
                .inputImg{
                    width: $subContainerWidth * (1/1.8);
                    @extend %input-base
                }
            }
            .tableBodyButtons{
                border: none;
                .deleteButton{
                    background: "https://w7.pngwing.com/pngs/124/277/png-transparent-delete-cross-black-crash-cancel-no-remove-prohibited-ban.png";
                }
            }
            .tableBodyImg::-webkit-scrollbar 
            {
                display: none;
            }
            .AddButton{
                background-color: inherit;
                border: none;
                display: inline-block;
                cursor: pointer;
                font-size: medium;
                @extend %table-border;
            }
        }
        
        .startButton{
                text-align: center;
                text-decoration: none;
                margin-top: 30px;
        }
    }
    .subContainer::-webkit-scrollbar 
            {
                display: none;
            }

}

</style>