# TrackTempest
- A simple cyclone track generator made with 💗 by Blaine Palmer 🫶
- 🖇️ Forked from: [StrawberryMaster's TrackGen Fork](https://strawberrymaster.github.io/TrackGen/)
## Usage
- Each line is a point to be plotted on the map
- Each field gives information about the point to be plotted

| Field      | Description | Example | Required? |
|:----------:|:------------|:-------:|:---------:|
| Name       | Name of the cyclone, used to join points together | Iota | <ul><li> [ ] No </li></ul> |
| Latitude   | Latitude coordinate, choose either °N or °S instead of using negative numbers | 52 °N | <ul><li> [x] Yes </li></ul> |
| Longitude  | Longitude coordinate, choose either °E or °W instead of using negative numbers | 1°W | <ul><li> [x] Yes </li></ul> |
| Wind Speed | Wind speed at that point, leave blank for unknown speeds | 25 kt | <ul><li> [ ] No </li></ul> |
| Stage      | Stage of tropical cyclone (determines shape used for point) | Tropical Cyclone | <ul><li> [x] Yes </li></ul> |
##  Example ⚙️ Generations:
## 2002 North Atlantic Hurricane Season
![Summary map generated with TrackTempest](/Example%20Generations/2002_natl.png)
Generated with TrackTempest