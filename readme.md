# Monitoring slowest query with Grafana, PostgreSQL, Nest.js

## How to run
```
docker compose up -d --build
```

## How to add visualize on dashboard

### 1. Hit the API to get slowest query data
```
curl http://localhost:3001/query/slow
```
### 2. Open `localhost:3000` on your browser

login with this credential

username: `admin`
password: `admin`

### 3. Click dashboard on the side panel

![side panel dashboard](./screenshots/side-panel-dashboard.png)

### 4. Click **New** dropdown and click New Dashboard

![Add Dashboard](./screenshots/add-dashboard.png)

### 5. Click **+ Add Visualization**

![Add Visualization](./screenshots/add-visualization.png)

### 6. Choose Postgresql data source 

![Add data source](./screenshots/select-data-source.png)

### 7. click `Code` beside of `Builder` and paste this query

![Add query](./screenshots/add-query.png)

```
SELECT
  query,
  total_exec_time,
  mean_exec_time,
  calls,
  dbid,
  userid
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;
```

after paste this query, click **Run Query** button

![Run Query](./screenshots/run-query.png)

### 8. You can choose visualization in the right side panel

![Right Side panel](./screenshots/right-side-panel.png)

