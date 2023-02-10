import { 
    createSelector,
    createEntityAdapter
 } from "@reduxjs/toolkit";
 import { apiSlice } from "../../app/api/apiSlice";

 const logsAdapter= createEntityAdapter({})
 const initialState= logsAdapter.getInitialState()

 export const logsApiSlice= apiSlice.injectEndpoints({
    endpoints: builder =>({
        getLogs: builder.query({
            query: ()=> '/logs',
            validateStatus: (response, result) =>{
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor:5,
            transformResponse: responseData =>{
                const loadedLogs = responseData.map(log =>{
                    log.id = log._id
                    return log
                });
                return logsAdapter.setAll(initialState, loadedLogs)
            }
        }),
        providesTags: (result, error, arg) =>{
            if(result?.ids){
                return[
                    {type: 'Log', id:'LIST'},
                    ...result.ids.map(id=>({type: 'Log', id}))
                ]
            }else return [{ type: 'Log', id:'LIST'}]
        }
    })
 })

 export const {
    useGetLogsQuery
 } = logsApiSlice

 export const selecLogsResult= logsApiSlice.endpoints.getLogs.select()
 
 //Noormalized data
 const selectLogsData= createSelector(
    selecLogsResult,
    logsResult => logsResult.data
 )

 export const {
    selectAll: selectAllLogs,
    selectById: selectLogById,
    selectIds: selectLogIds

 } = logsAdapter.getSelectors(state => selectLogsData(state) ?? initialState)