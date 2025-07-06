import { Link } from "react-router-dom";

const ProductItem = ({ title, description}) => {
  return (
    <Link className={`block px-4 cursor-pointer py-3  hover:bg-gray-50 group`}>
      <div className="font-medium text-sm text-gray-900">{title}</div>
      {description && <div className="text-sm text-gray-500 group-hover:text-gray-700 mt-1">{description}</div>}
    </Link>
  );
}
const ProductsDropdown = ({ activeCategory = 'featured', onCategorySelect }) => {

  const formatCategoryTitle = (slug) => {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
  // Organize products by category
  const productsByCategory = {
    "featured": [
      { title: "Concert", description: "Software to manage applications, mitigate risks and enhance resilience" },
      { title: "Environmental Intelligence", description: "SaaS for predicting and responding to weather and climate events" },
      { title: "FlashSystem", description: "Primary storage for performance and latency sensitive workloads" },
      { title: "HashiCorp", description: "Manage cloud infrastructure and security" },
      { title: "IBM Cloud", description: "On-demand cloud computing platform and APIs" },
      { title: "IBM Z", description: "Flagship mainframe with on-chip AI and quantum-safe cryptography" },
      { title: "IBM webMethods Hybrid Integration", description: "AI powered automation software to unify integration workflows" },
      { title: "Instana", description: "Software for application performance monitoring and automation" },
      { title: "MaaS360", description: "Unified endpoint management software for many device types" },
      { title: "Maximo", description: "Software for asset management and related workflows" },
      { title: "Planning Analytics", description: "Software to automate financial and operational planning" },
      { title: "Robotic Process Automation (RPA)", description: "Software to automate workflows and business processes" },
      { title: "Storage Defender", description: "Data resiliency software for threat detection and data recovery" },
      { title: "Turbonomic", description: "Software to manage and optimize IT resource usage" },
      { title: "Verify", description: "Identity, authentication, and access control software" },
      { title: "watsonx", description: "AI and data platform" },
      { title: "watsonx Assistant", description: "Virtual agents customizable to any domain" },
      { title: "watsonx Orchestrate", description: "Personal-assistant software that automates repetitive tasks" }
    ], "ai-machine-learning": [
      { 
        title: "Cloud Pak for ATOps", 
        description: "DevOps management tool with AI analysis and recommendations" 
      },
      { 
        title: "Cloud Pak for Data", 
        description: "Tools for data analysis, organization and management" 
      },
      { 
        title: "Knowledge Catalog", 
        description: "SaaS to catalog data, AI models, metadata, policies and more" 
      },
      { 
        title: "Watson Discovery", 
        description: "AI to search in and answer questions about business documents" 
      },
      { 
        title: "Watson Natural Language Understanding", 
        description: "API for text analysis and metadata extraction" 
      },
      { 
        title: "Watson Speech to Text", 
        description: "API for real-time speech recognition and transcription" 
      },
      { 
        title: "Watson Studio", 
        description: "IDE to build, run and manage AI models" 
      },
      { 
        title: "Watson Text to Speech", 
        description: "API for real-time text to speech conversion" 
      },
      { 
        title: "Z Anomaly Analytics", 
        description: "Operational anomaly detection software for mainframes" 
      },
      { 
        title: "watsonx", 
        description: "AI and data platform" 
      },
      { 
        title: "watsonx Assistant", 
        description: "Virtual agents customizable to any domain" 
      },
      { 
        title: "watsonx Code Assistant", 
        description: "AI tool to generate code" 
      }
    ],
     "analytics": [
      { 
        title: "Business Analytics Enterprise", 
        description: "Software for business planning and analysis" 
      },
      { 
        title: "CPLEX", 
        description: "Software to build and solve complex optimization models" 
      },
      { 
        title: "Cloud Pak for Data", 
        description: "Tools for data analysis, organization and management" 
      },
      { 
        title: "Cognos Analytics", 
        description: "Software for business intelligence and performance management" 
      },
      { 
        title: "Databand", 
        description: "Data observability software for data engineers and DataOps teams" 
      },
      { 
        title: "Infosphere Information Server", 
        description: "Data integration suite for ETL, governance and analysis" 
      },
      { 
        title: "Manta Data Lineage", 
        description: "Software to visualize the flow of data from origin to consumption" 
      },
      { 
        title: "Netezza", 
        description: "Data warehousing and analytics system on custom hardware" 
      },
      { 
        title: "Optim", 
        description: "Software to manage test, production, and archived data" 
      },
      { 
        title: "Planning Analytics", 
        description: "Software to automate financial and operational planning" 
      },
      { 
        title: "SPSS", 
        description: "Software for statistical analysis and business intelligence" 
      },
      { 
        title: "Spectrum Computing", 
        description: "Software to optimize resources in complex computing clusters" 
      },
      { 
        title: "StreamSets", 
        description: "Graphical interface to build and manage streaming data pipelines" 
      },
      { 
        title: "Watson Discovery", 
        description: "AI to search in and answer questions about business documents" 
      },
      { 
        title: "Watson Studio", 
        description: "IDE to build, run and manage AI models" 
      }
    ],
    "asset-lifecycle-management": [
      { 
        title: "Environmental Intelligence", 
        description: "SaaS for predicting and responding to weather and climate events" 
      },
      { 
        title: "Environment", 
        description: "ESG data management, reporting and analysis SaaS" 
      },
      { 
        title: "Maximo", 
        description: "Software for asset management and related workflows" 
      },
      { 
        title: "TRIRIGA", 
        description: "Software for real estate and workplace management" 
      }
    ],  "business-automation": [
    { title: "Automation Document Processing", description: "Extract data from business documents using AI" },
    { title: "Operational Decision Manager", description: "Decision automation software for business rules" },
    { title: "Process Mining", description: "Analyze and optimize process flows based on event data" },
    { title: "Robotic Process Automation (RPA)", description: "Automate rule-based business processes with bots" },
    { title: "Workflow Automation", description: "Orchestrate people, systems, and AI into workflows" }
  ],

  "containers": [
    { title: "Red Hat OpenShift on IBM Cloud", description: "Managed Kubernetes with OpenShift on IBM Cloud" },
    { title: "IBM Cloud Code Engine", description: "Fully managed serverless runtime for containers and code" },
    { title: "IBM Container Registry", description: "Secure image storage and vulnerability scanning" }
  ],

  "databases": [
    { title: "Db2", description: "Enterprise-grade relational database with AI optimization" },
    { title: "Informix", description: "High-performance database for OLTP and IoT use cases" },
    { title: "Data Virtualization", description: "Query data across sources without moving it" }
  ],

  "devops-engineering": [
    { title: "UrbanCode Deploy", description: "Automate application deployments across environments" },
    { title: "Instana", description: "APM software for observability of modern applications" },
    { title: "Turbonomic", description: "AI for resource optimization across CI/CD pipelines" }
  ],

  "it-automation": [
    { title: "Ansible Automation Platform", description: "Automate IT operations with playbooks and integrations" },
    { title: "Cloud Pak for Watson AIOps", description: "AI to identify and resolve IT issues before they impact users" }
  ],

  "middleware": [
    { title: "App Connect", description: "Integration platform for apps, data, and APIs" },
    { title: "MQ", description: "Messaging software for secure and reliable app connectivity" },
    { title: "ACE (App Connect Enterprise)", description: "Integration server for data transformation and messaging" }
  ],

  "network": [
    { title: "NS1 Connect", description: "Network automation and DNS management platform" },
    { title: "AT&T NetBond on IBM Cloud", description: "Private and secure network connections to the cloud" }
  ],

  "operating-systems": [
    { title: "IBM i", description: "Enterprise OS for IBM Power Systems" },
    { title: "AIX", description: "UNIX OS for Power-based systems" },
    { title: "Linux on IBM Z", description: "Secure, scalable Linux platform on mainframe" }
  ],

  "quantum": [
    { title: "IBM Quantum Platform", description: "Access real quantum hardware via the cloud" },
    { title: "Qiskit", description: "Open-source SDK for quantum programming" }
  ],

  "security-identity": [
    { title: "QRadar Suite", description: "Threat detection and response platform" },
    { title: "Verify", description: "Identity governance and access management" },
    { title: "Secrets Manager", description: "Manage sensitive information across services" }
  ],

  "servers": [
    { title: "IBM Power Systems", description: "High-performance servers for AI and analytics workloads" },
    { title: "IBM Z", description: "Enterprise server with high resilience and security" }
  ],

  "storage": [
    { title: "FlashSystem", description: "NVMe storage for high-performance applications" },
    { title: "Storage Defender", description: "Cyber-resilience and recovery protection for backup data" },
    { title: "Tape Systems", description: "Long-term, low-cost storage solution for cold data" }
  ]
};

  const products = productsByCategory[activeCategory] || productsByCategory.featured;

 return (
    <div className="flex w-full h-[83vh] absolute left-0 top-0 bg-white shadow-lg border border-gray-200">
      {/* Sidebar - left side */}
      <div className="w-64 ml-10 border-r-2 border-gray-300  flex flex-col">
        
        <div className="flex-1 overflow-y-auto">
          <ul className="py-0 ">
            {/* Categories */}
            {[
              'Featured',
              "AI & machine learning",
              "Analytics",
              "Asset lifecycle management",
              "Business automation",
              "Containers",
              "Databases",
              "DevOps & Engineering",
              "IT automation",
              "Middleware",
              "Network",
              "Operating systems",
              "Quantum",
              "Security & identity",
              "Servers",
              "Storage"
            ].map((category) => {
              const categoryId = category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
              return (
                <li key={category}>
                  <button
                    onClick={() => onCategorySelect(categoryId)}
                    className={`w-full text-left px-2 py-1 cursor-pointer flex items-center hover:bg-gray-100 ${
                      activeCategory === categoryId 
                        ? 'border-2 border-blue-500 bg-gray-100' 
                        : 'border-2 border-transparent'
                    }`}
                  >
                    <span className="text-sm">{category}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        
        
          <button className="w-full px-3 py-2 text-white bg-blue-600 hover:bg-blue-800 text-sm font-medium">
            View all products →
          </button>
        
      </div>
      
      {/* Products content - right side */}
      <div className="flex-1 overflow-y-auto p-6">
      <h3 className="text-2xl font-medium mb-6">
          {formatCategoryTitle(activeCategory)}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductItem 
              key={index}
              title={product.title} 
              description={product.description}
              href="#"
              className="hover:bg-gray-50 rounded-lg p-4 border border-gray-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsDropdown