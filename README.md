
# Weather Map: Mapping AI Public Debates

This repository contains one instance of the **Weather Map**, an innovative visualization tool designed to map and analyze public discourse. Developed as part of a research study focusing on the MIT Technology Review’s publications from 2021 to 2024, this instance of the tool leverages **network visualization**, **natural language processing**, and **topic modeling** to explore trends, patterns, and controversies surrounding AI, particularly in the era of ChatGPT.

The Weather Map of MIT Technology Review is accessible at https://albataboada.github.io/Weather_map/.

## Features

- **Dynamic Visualization:** Inspired by weather charts, the map visualizes AI discourse clusters with "pressure zones" to represent contentious areas.
- **Temporal Analysis:** Tracks the evolution of themes over time, highlighting emerging and fading topics.
- **Cluster Identification:** Uses **HDBSCAN** for clustering articles based on thematic similarity.
- **Meta-labeling:** Integrates the **ChatGPT API** to generate concise, interpretable labels for thematic clusters.
- **Sentiment and Polarization Analysis:** Measures tension and polarization in AI-related discussions using pretrained sentiment dictionaries.

## Dataset

The project analyzed **562 articles** from the MIT Technology Review, retrieved via the **Media Cloud API**. Articles were selected based on their relevance to AI and cleaned for consistency (word count: 500–6,000 words). Themes were extracted using **TF-IDF** and dimensionality reduction techniques like **UMAP**.

## Visualization Workflow

1. **Data Preprocessing:** Text lemmatization and keyword extraction.
2. **Thematic Mapping:** Generates a 2D map of articles based on text similarity.
3. **Cluster Analysis:** Identifies thematic groups using HDBSCAN.
4. **Interactive Map Design:** Utilizes **d3.js** to present the Weather Map interactively, with features like zoom, selection, and layered visualization.

## Key Findings

- **Geopolitical Focus:** Significant clusters around Chinese and U.S. AI ecosystems, reflecting their dominance in global AI narratives.
- **Ethical and Regulatory Concerns:** Topics like AI bias, military applications, and election influence are prominent in the dataset.
- **Robotic and Chatbot Evolution:** Tracks the rise of conversational agents and their societal impact.
- **AI in Science and Business:** Highlights AI’s role in advancing scientific research and addressing sustainability challenges.

## Usage

### Prerequisites

- **Python 3.8+**
- Libraries: `pandas`, `numpy`, `scikit-learn`, `hdbscan`, `umap-learn`
- Optional: Access to **ChatGPT API** for meta-labeling clusters.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/AlbaTaboada/Weather_map.git
cd Weather_map
pip install -r requirements.txt
```

### Running the Analysis

1. Preprocess the data using the `data_preprocessing.py` script.
   ```bash
   python data_preprocessing.py
   ```
2. Generate clusters and reduce dimensions using `generate_map.py`.
   ```bash
   python generate_map.py
   ```
3. Visualize the Weather Map with the interactive interface provided in the `visualization` directory.
   ```bash
   python -m http.server --directory visualization
   ```

4. Open the browser and navigate to `http://localhost:8000` to interact with the Weather Map.

### Customization

- Modify parameters in the `config.json` file to adjust preprocessing, clustering, and visualization settings.
- Use different datasets by replacing the input files in the `data/` directory.

## Citation

If you use this tool in your research, please cite the following paper:

**Rodighiero, D., & Daniélou, J. (2023). Weather Map: A Diachronic Visual Model for Controversy Mapping.**  
In *Zoomland* (pp. 449–466). De Gruyter.  
[DOI: 10.1515/9783111317779-017](https://doi.org/10.1515/9783111317779-017)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

This project was developed with support from the University of Groningen and contributions from the MIT Technology Review dataset. Special thanks to Alba Taboada for repository management.
