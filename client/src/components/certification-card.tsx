import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Award, Calendar, Code, ExternalLink, X, Tag } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CertificationData {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  credential?: string;
  category?: string;
  verifyLink?: string;
}

interface CertificationCardProps extends CertificationData {
  delay?: number;
}

export function CertificationCard({ 
  title, 
  issuer, 
  date, 
  image, 
  credential, 
  category,
  verifyLink,
  delay = 0 
}: CertificationCardProps) {
  const [showDialog, setShowDialog] = useState(false);

 // 🟡 Get style based on category instead of issuer
const getCredentialStyle = () => {
  const categoryColors: Record<string, string> = {
    // 🎓 Education/Academic Categories
    'Programming': 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800',
    'Cloud': 'bg-indigo-100 text-indigo-700 border-indigo-300 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800',
    'AI & ML': 'bg-red-100 text-purple-700 border-purple-300 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800',
    'Web Development': 'bg-green-100 text-green-700 border-green-300 dark:bg-green-950 dark:text-green-300 dark:border-green-800',
    
    // 🪖 NCC Category
    'NCC': 'bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800',

    // 🌐 Extra fallback categories (you can add more manually)
    'Networking': 'bg-cyan-100 text-cyan-700 border-cyan-300 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800',
    'Multiple': 'bg-pink-100 text-pink-700 border-pink-300 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800',
    'Other': 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800'
  };

  // 🔁 Use category for styling; if missing, use fallback
  return categoryColors[category || "Other"] || 'bg-primary/10 text-primary border-primary/30';
};




  

  // Generate a certificate image or placeholder
  const getCertificateImage = () => {
    if (image) {
      return (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      );
    }
  
    // Agar image nahi hai to default SVG generate karo
    const color = issuer === 'Coursera' ? '#2A73CC' : 
                  issuer === 'Infosys' ? '#007C89' : 
                  issuer === 'NPTEL' ? '#F47920' :
                  issuer === 'LinkedIn Learning' ? '#0077B5' :
                  issuer === 'SkillUp' ? '#6B46C1' : '#3B82F6';
  
    return (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* yeh tera pura SVG wala code yaha rahega */}
        <rect x="0" y="0" width="400" height="200" fill={`${color}10`} />
        <rect x="10" y="10" width="380" height="180" rx="10" fill="white" stroke={color} strokeWidth="2" />
        <text x="200" y="50" fontFamily="Arial" fontSize="16" fontWeight="bold" fill={color} textAnchor="middle">CERTIFICATE OF COMPLETION</text>
        <text x="200" y="90" fontFamily="Arial" fontSize="14" fill="#333" textAnchor="middle">This is to certify that</text>
        <text x="200" y="115" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#333" textAnchor="middle">Vivek Chand Nirala</text>
        <text x="200" y="140" fontFamily="Arial" fontSize="14" fill="#333" textAnchor="middle">has successfully completed</text>
        <text x="200" y="165" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#333" textAnchor="middle" className="cert-title">{typeof title === 'string' && (title.length > 35 ? `${title.substring(0, 35)}...` : title)}</text>
        <circle cx="60" cy="150" r="30" fill={`${color}20`} />
        <circle cx="340" cy="150" r="30" fill={`${color}20`} />
      </svg>
    );
  };
  

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="h-full cursor-pointer"
        onClick={() => setShowDialog(true)}
      >
        <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-md transition-all overflow-hidden group relative">
          <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-medium py-1 px-2 rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity">
            Click to view
          </div>

          <CardHeader className="pb-2 relative">
            <CardDescription className="text-primary flex items-center gap-2 font-medium">
              <Award className="h-4 w-4" />
              {issuer}
            </CardDescription>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>

          <CardContent className="pt-2">

            {/* Bahar se Dekhne ke Waqt kaise lagega Thumbnail Certidicate ka  */}
            <div className="w-full overflow-hidden rounded-md mb-3 aspect-video bg-muted/50">
            {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className="preview-image"
                />
              ) : (
                getCertificateImage()
              )}

            </div>
            <div className="flex justify-between">
              {date && (
                <Badge variant="outline" className={getCredentialStyle()}>
                  {date}
                </Badge>
              )}
              {category && (
                <Badge variant="outline" className={getCredentialStyle()}>
                  {category}
                </Badge>
              )}
            </div>
            {credential && (
              <div className={`text-xs rounded-full border px-3 py-1 inline-block mt-1 ${getCredentialStyle()}`}>
                ID: {credential}
              </div>
            )}
          </CardContent>

          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary/20">
            <div className="h-full bg-primary" style={{ width: '100%' }} />
          </div>
        </Card>
      </motion.div>

      {/* Certificate Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              {title}
            </DialogTitle>
            <DialogDescription className="flex items-center justify-between">
              <span>Issued by {issuer}</span>
              {date && (
                <span className="text-muted-foreground text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  {date}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="my-4">
            <div className="bg-muted/30 border rounded-lg p-4 mb-6">
              <div className="mx-auto max-w-2xl">

                {/* Preview Section meh Change karne ke liye */}
              {image ? (
                      <img 
                        src={image} 
                        alt={title} 
                        className="preview-image"
                      />
                    ) : (
                      getCertificateImage()
                    )} 

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium flex items-center gap-1.5">
                  <Tag className="h-4 w-4 text-primary" /> 
                  Category
                </h4>
                <p className="text-muted-foreground text-sm">{category || "Professional Development"}</p>
              </div>

              {credential && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-1.5">
                    <Code className="h-4 w-4 text-primary" /> 
                    Credential ID
                  </h4>
                  <p className="text-muted-foreground text-sm font-mono">{credential}</p>
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="flex sm:justify-between items-center">
            <Button variant="outline" size="sm" onClick={() => setShowDialog(false)}>
              <X className="h-4 w-4 mr-2" /> Close
            </Button>

            <Button 
            size="sm" 
              onClick={() => {
                if (verifyLink) {
                  window.open(verifyLink, '_blank');
                }
              }}
             disabled={!verifyLink} // optional: disable button if no link
            >
            <ExternalLink className="h-4 w-4 mr-2" /> Verify Certificate
            </Button>

          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}