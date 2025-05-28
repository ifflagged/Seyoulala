# 如果"data.component[*].zz_content[*].ad_campaign_id"的字符串值是有效的，则删除"data.component[*].zz_content[*].ad_campaign_id"所在的对象
# 如果"data.component[*].zz_content[*].tag"的字符串值是有效的，则删除"data.component[*].zz_content[*].tag"所在的对象
# 如果"data.component[*].zz_content[*].model_type"的值是字符串类型的"ads"则删除"data.component[*].zz_content[*].model_type"所在的对象

.data.component |= map(
  # 仅当 zz_content 是数组时执行过滤
  if (.zz_content | type) == "array" then
    .zz_content |= map(
      select(
        ( (.ad_campaign_id? | type == "string" and length > 0) // false ) or
        ( (.tag? | type == "string" and length > 0) // false ) or
        ( (.model_type? == "ads" and (type == "string")) // false )
        | not
      )
    )
  else . end
)

# 如果"data.component[*].zz_type"存在，且字符串的值不是"circular_banner"或"filter"或"list"，则删除"data.component[*].zz_type"所在的对象
| .data.component |= map(
  select(
    if has("zz_type") then 
      .zz_type | IN(["circular_banner", "filter", "list"][]) 
    else true end
  )
)