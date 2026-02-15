interface ProjectMockupProps {
    image: string;
    alt: string;
    type?: 'laptop' | 'desktop' | 'mobile';
}

const ProjectMockup = ({ image, alt, type = 'laptop' }: ProjectMockupProps) => {
    if (type === 'mobile') {
        return (
            <div className="relative mx-auto w-[280px] h-full">
                {/* Mobile Frame */}
                <div className="relative bg-zinc-900 rounded-[2.5rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-10" />

                    {/* Screen */}
                    <div className="relative bg-white overflow-hidden aspect-[9/19.5]">
                        <img
                            src={image}
                            alt={alt}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'desktop') {
        return (
            <div className="relative w-full">
                {/* Monitor */}
                <div className="relative">
                    {/* Screen Bezel */}
                    <div className="bg-zinc-900 rounded-lg p-3 shadow-2xl">
                        {/* Screen */}
                        <div className="relative bg-zinc-950 rounded overflow-hidden aspect-video">
                            <img
                                src={image}
                                alt={alt}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Monitor Stand */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-8 bg-zinc-800 rounded-b-lg" />
                        <div className="w-32 h-2 bg-zinc-700 rounded-full" />
                    </div>
                </div>
            </div>
        );
    }

    // Laptop mockup (default)
    return (
        <div className="relative w-full">
            {/* Laptop Screen */}
            <div className="relative">
                {/* Screen Bezel */}
                <div className="bg-zinc-900 rounded-t-lg p-2 shadow-2xl">
                    {/* Screen */}
                    <div className="relative bg-zinc-950 rounded-sm overflow-hidden aspect-video">
                        <img
                            src={image}
                            alt={alt}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

                {/* Laptop Base */}
                <div className="relative h-2 bg-gradient-to-b from-zinc-800 to-zinc-700 rounded-b-lg shadow-lg">
                    {/* Keyboard hint */}
                    <div className="absolute inset-x-0 top-0 h-px bg-zinc-600" />
                </div>

                {/* Laptop Bottom */}
                <div className="relative -mt-1">
                    <div className="h-1 bg-zinc-800 rounded-b-xl mx-4" />
                    <div className="h-0.5 bg-zinc-700/50 rounded-b-2xl mx-2" />
                </div>
            </div>
        </div>
    );
};

export default ProjectMockup;
