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
                        <td align="center" class="tableBodyId">{{key+1}}</td>
                        <td class="tableBodyName">
                            <input class="inputName" v-model="contestant.name"/>
                        </td>
                        <td class="tableBodyImg">
                            <img class="previewImg" v-bind:src="contestant.img"/>
                            <input class="inputImg" v-model="contestant.img"/>
                        </td>
                        <td class="tableBodyButtons">
                                <img class="deleteButton" src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" @click="deleteContestant(key)">
                        </td>
                    </tr>
                    <tr>
                        <td><button class="AddButton" @click="addContestant()">Add new</button></td>
                    </tr>
                </tbody>
            </table>
            <button class="startButton" @click="$router.push({ name: 'battlePage' })"> Start </button>     
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

<style lang="scss" scoped>
@import "../assets/styles.scss";

%table-border{
    border: solid;
    border-color: #181818;
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
        display: flex;
        flex-flow: column nowrap;
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
            margin: auto;
            border: none;
            margin-left: 4px;
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
                white-space: nowrap;
                .previewImg{
                    width: 20px;
                    height: 20px;
                }
                .inputImg{
                    width: $subContainerWidth * (1/1.9);
                    @extend %input-base;
                }
            }
            .tableBodyButtons{
                border: none;
                padding-left: 3px;
                .deleteButton{
                    border: none;
                    cursor: pointer;
                    height: 15px;
                    width: 15px;
                }
            }
            .tableBodyImg::-webkit-scrollbar 
            {
                display: none;
            }
            .AddButton{
                @extend %btn;
                width: 100px;
                padding: 5px;
                font-size: 11pt;
            }
        }
        
        .startButton{
            @extend %btn;
            align-self: center;
            &:hover{
                @extend %btnhover;
            }
        }
    }
    .subContainer::-webkit-scrollbar 
            {
                display: none;
            }

}

</style>