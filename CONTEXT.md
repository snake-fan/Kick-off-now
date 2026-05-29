# Kick-off-now

Kick-off-now helps a worker quickly understand their current work-start state before beginning the day, using playful labels and practical advice.

## Language

**牛马称号**:
A predefined absurd-but-explainable label that names a user's current work-start state.
_Avoid_: 结果、类型、标签、状态描述
_Style_: Short, direct internet-meltdown phrasing that can work as a meme title.

**称号素材**:
The absurd imagery used to make a **牛马称号** feel playful, whether or not it includes an office anchor.
_Avoid_: 诊断词、贬损身份标签、能力羞辱

**称号基准**:
The predefined low, medium, or high **今日维度** pattern represented by a **牛马称号**.
_Avoid_: 默认映射数值、硬编码结果、AI 生成称号

**测评版本**:
The version of the question and scoring rules used for a **首次测评** or **每日测评**.
_Avoid_: 题库日期、算法版本、配置名

**称号版本**:
The version of the **牛马称号** mapping used when selecting a **牛马称号**.
_Avoid_: 称号库日期、文案版本、活动版本

**牛马代码**:
A four-letter label derived from the user's stable work-profile dimensions.
_Avoid_: 本命牛马型、长期称号、人格类型

**重测**:
A user-initiated repeat of the **首次测评** that replaces the current **牛马代码**.
_Avoid_: 手动编辑、修正分数、改字母

**用户画像**:
The user's long-term profile, consisting of their **牛马代码** and summarized **状态日** history.
_Avoid_: 个人背景、用户档案、人格

**用户账号**:
A persistent identity that owns a user's **用户画像** across sessions and devices.
_Avoid_: 本地用户、设备档案、社交身份、公开主页

**画像同步**:
The continuity of a **用户画像** through a **用户账号** rather than a single device.
_Avoid_: 备份、导出、云存档

**状态记录**:
A historical record of a user's past **今日维度**, **牛马称号**, and **开工建议**.
_Avoid_: 打卡记录、日志、历史结果、原始答案、候选称号列表

**状态日**:
A user-local calendar day that groups one or more **状态记录** for a user.
_Avoid_: 主记录、补充记录、打卡日

**状态日摘要**:
A daily aggregation of the **状态记录** inside one **状态日**.
_Avoid_: 今日主记录、最新记录、平均记录

**缺测日**:
A user-local calendar day with no **状态记录**.
_Avoid_: 低状态日、零分日、失败打卡

**趋势摘要**:
A multi-day summary built from **状态日摘要** for reviewing long-term change and lightly personalizing **开工建议**.
_Avoid_: 每日必看内容、复杂报表、健康分析

**状态趋势**:
A user-initiated view for reviewing long-term changes in **状态日摘要**.
_Avoid_: 每日开工页、分析后台、绩效报表

**底色维度**:
One of the stable dimensions used to derive a user's **牛马代码**.
_Avoid_: 长期状态、固定属性

**首次测评**:
A one-time onboarding quiz with semi-scenario choices that estimates the user's **底色维度**.
_Avoid_: 长测、初始测试、人格测试、能力自评

**牛马代码预览**:
An unsaved **牛马代码** shown after **首次测评** or **重测** before it is attached to a **用户账号**.
_Avoid_: 游客画像、临时账号、正式结果

**启动方式**:
A **底色维度** describing whether a user tends to start work through self-motion or external ignition.
_Avoid_: 自驱力
_Tendencies_: F 自燃型 / I 点火型

**协作偏好**:
A **底色维度** describing whether a user tends to make progress through group interaction or solo focus.
_Avoid_: 社恐、外向程度
_Tendencies_: G 群工型 / S 独耕型

**压力反应**:
A **底色维度** describing whether a user tends to become more effective or less effective under pressure.
_Avoid_: 抗压能力
_Tendencies_: R 冲刺型 / P 稳态型

**任务风格**:
A **底色维度** describing whether a user tends to prefer opening up ambiguous work or closing work down to completion.
_Avoid_: 执行力
_Tendencies_: E 开荒型 / C 收口型

**今日维度**:
One of the daily-changing dimensions used to determine a user's **牛马称号**.
_Avoid_: 每日属性、临时状态

**每日测评**:
A short recurring quiz with abstract scenario choices that estimates the user's **今日维度** before work starts.
_Avoid_: 每日测试、打卡、问卷、滑杆量表

**开工提醒**:
An optional prompt that invites the user to start a **每日测评** without treating absence as failure.
_Avoid_: 打卡提醒、催促、断签、连续签到

**精神电量**:
A **今日维度** describing how much usable energy the user has at the start of the workday.
_Avoid_: 心情

**脑内噪音**:
A **今日维度** describing how noisy, scattered, or anxious the user's attention is at the start of the workday.
_Avoid_: 专注力

**社交负荷**:
A **今日维度** describing how much communication and collaboration the user can tolerate today.
_Avoid_: 社交欲望

**任务压强**:
A **今日维度** describing how much deadline pressure, backlog, or external urgency the user faces today.
_Avoid_: 忙不忙

**开工建议**:
Personalized guidance with a fixed shape: explain the **牛马称号**, give one startup action, and warn about one likely pitfall.
_Avoid_: 建议、提示、鸡汤、自由发挥文案

**分享图**:
A lightweight image of a **牛马称号** result for sharing outside the product.
_Avoid_: 公开主页、排行榜、状态报告、账号名片

**开工动作**:
A small action that can be completed in 5 to 15 minutes to begin work immediately.
_Avoid_: 日程规划、任务管理、完整工作计划

## Relationships

- A **牛马称号** produces one **开工建议** for the current kickoff.
- A **首次测评** estimates the four **底色维度** before creating a **牛马代码预览**.
- A **牛马代码预览** becomes a **牛马代码** when saved to a **用户账号**.
- A **重测** creates a **牛马代码预览** and replaces the current **牛马代码** only after confirmation.
- A **牛马代码** is derived from four **底色维度**: **启动方式**, **协作偏好**, **压力反应**, and **任务风格**.
- A **用户账号** owns exactly one **用户画像**.
- A **用户画像** consists of a **牛马代码** and a **趋势摘要** built from **状态日** history.
- **画像同步** keeps a **用户画像** continuous beyond a single device.
- A **开工提醒** invites the user into a **每日测评** without creating a streak or penalty.
- A **状态日** contains one or more **状态记录**.
- A **状态日摘要** represents one **状态日** when building longer-term summaries.
- A **缺测日** is shown as missing data rather than as a low-value **状态日摘要**.
- A **趋势摘要** is built from multiple **状态日摘要** and describes patterns without diagnosing health, ability, or performance.
- **状态趋势** presents long-term changes in **今日维度** and **牛马称号** history outside the daily kickoff flow.
- An **开工建议** may reference a **趋势摘要** without making trend review part of the daily kickoff flow.
- A **状态记录** keeps the **测评版本** and **称号版本** that produced it.
- A **状态记录** stores past **今日维度**, **牛马称号**, **开工建议**, and the **牛马代码** used at that time.
- A **每日测评** estimates the four **今日维度** before selecting a **牛马称号**.
- A **牛马称号** is selected by similarity matching the measured **今日维度** against predefined **称号基准**.
- If multiple **牛马称号** are equally similar, one may be chosen randomly from the tied candidates.
- An **开工建议** is tailored by the selected **牛马称号**, the user's **牛马代码**, and the four **今日维度**.
- An **开工建议** contains a state explanation, one **开工动作**, and one pitfall warning.
- A **分享图** can show a **牛马称号**, a brief state explanation, and one **开工动作** without exposing **状态记录**, **趋势摘要**, or account identity.

## Example dialogue

> **Dev:** "Do we generate a random funny result at the end of the quiz?"
> **Domain expert:** "No. Each **牛马称号** has a **称号基准**. The user's **今日维度** is matched to the most similar title, and the **开工建议** is personalized from that title plus the user's **牛马代码**."

## Flagged ambiguities

- "开工姿态" was proposed as the main result term, but the product should treat **牛马称号** as the visible state category and **开工建议** as the personalized practical output.
- "本命牛马型" was proposed for the stable profile label, but the product should use a compact **牛马代码** instead of another playful title.
- Early **牛马称号** examples were too literal; resolved: labels should be absurd but explainable rather than plain state descriptions.
- **牛马称号** should be short, direct, and internet-meltdown flavored rather than poetic or explanation-heavy.
- The first **称号版本** should contain 16 **牛马称号** balanced across positive, neutral-weird, low-energy, and high-pressure chaotic states.
- **称号素材** may include mild slacking-off energy, but the surrounding **开工建议** must return the user to a concrete **开工动作**.
- **称号素材** may be fully absurd and does not need an office anchor, but should avoid real diagnostic language, degrading identity labels, or genuine abandonment of work.
- **用户账号** exists for **用户画像** ownership and **画像同步**, not for social identity or public sharing.
