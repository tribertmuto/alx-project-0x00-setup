import React from 'react';
import Button from '../components/Button';

const Landing: React.FC = () => {
  const handleButtonClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Button Component Showcase
        </h1>

        {/* Size Variations */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Size Variations</h2>
          
          {/* Small Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-600 mb-4">Small Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                title="Small Rounded-SM"
                size="small"
                shape="rounded-sm"
                onClick={() => handleButtonClick('Small Rounded-SM')}
              />
              <Button
                title="Small Rounded-MD"
                size="small"
                shape="rounded-md"
                onClick={() => handleButtonClick('Small Rounded-MD')}
              />
              <Button
                title="Small Rounded-Full"
                size="small"
                shape="rounded-full"
                onClick={() => handleButtonClick('Small Rounded-Full')}
              />
            </div>
          </div>

          {/* Medium Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-600 mb-4">Medium Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                title="Medium Rounded-SM"
                size="medium"
                shape="rounded-sm"
                onClick={() => handleButtonClick('Medium Rounded-SM')}
              />
              <Button
                title="Medium Rounded-MD"
                size="medium"
                shape="rounded-md"
                onClick={() => handleButtonClick('Medium Rounded-MD')}
              />
              <Button
                title="Medium Rounded-Full"
                size="medium"
                shape="rounded-full"
                onClick={() => handleButtonClick('Medium Rounded-Full')}
              />
            </div>
          </div>

          {/* Large Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-600 mb-4">Large Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                title="Large Rounded-SM"
                size="large"
                shape="rounded-sm"
                onClick={() => handleButtonClick('Large Rounded-SM')}
              />
              <Button
                title="Large Rounded-MD"
                size="large"
                shape="rounded-md"
                onClick={() => handleButtonClick('Large Rounded-MD')}
              />
              <Button
                title="Large Rounded-Full"
                size="large"
                shape="rounded-full"
                onClick={() => handleButtonClick('Large Rounded-Full')}
              />
            </div>
          </div>
        </section>

        {/* Variant Showcase */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Button Variants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Variants */}
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-4">Primary</h3>
              <div className="space-y-3">
                <Button
                  title="Primary Small"
                  size="small"
                  shape="rounded-md"
                  variant="primary"
                  onClick={() => handleButtonClick('Primary Small')}
                />
                <Button
                  title="Primary Medium"
                  size="medium"
                  shape="rounded-md"
                  variant="primary"
                  onClick={() => handleButtonClick('Primary Medium')}
                />
                <Button
                  title="Primary Large"
                  size="large"
                  shape="rounded-md"
                  variant="primary"
                  onClick={() => handleButtonClick('Primary Large')}
                />
              </div>
            </div>

            {/* Secondary Variants */}
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-4">Secondary</h3>
              <div className="space-y-3">
                <Button
                  title="Secondary Small"
                  size="small"
                  shape="rounded-md"
                  variant="secondary"
                  onClick={() => handleButtonClick('Secondary Small')}
                />
                <Button
                  title="Secondary Medium"
                  size="medium"
                  shape="rounded-md"
                  variant="secondary"
                  onClick={() => handleButtonClick('Secondary Medium')}
                />
                <Button
                  title="Secondary Large"
                  size="large"
                  shape="rounded-md"
                  variant="secondary"
                  onClick={() => handleButtonClick('Secondary Large')}
                />
              </div>
            </div>

            {/* Outline Variants */}
            <div>
              <h3 className="text-lg font-medium text-gray-600 mb-4">Outline</h3>
              <div className="space-y-3">
                <Button
                  title="Outline Small"
                  size="small"
                  shape="rounded-md"
                  variant="outline"
                  onClick={() => handleButtonClick('Outline Small')}
                />
                <Button
                  title="Outline Medium"
                  size="medium"
                  shape="rounded-md"
                  variant="outline"
                  onClick={() => handleButtonClick('Outline Medium')}
                />
                <Button
                  title="Outline Large"
                  size="large"
                  shape="rounded-md"
                  variant="outline"
                  onClick={() => handleButtonClick('Outline Large')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Special Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Special Combinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Button
              title="Get Started"
              size="large"
              shape="rounded-full"
              variant="primary"
              onClick={() => handleButtonClick('Get Started')}
            />
            <Button
              title="Learn More"
              size="medium"
              shape="rounded-sm"
              variant="outline"
              onClick={() => handleButtonClick('Learn More')}
            />
            <Button
              title="Contact Us"
              size="small"
              shape="rounded-full"
              variant="secondary"
              onClick={() => handleButtonClick('Contact Us')}
            />
            <Button
              title="Download"
              size="medium"
              shape="rounded-full"
              variant="primary"
              onClick={() => handleButtonClick('Download')}
            />
            <Button
              title="Sign Up"
              size="large"
              shape="rounded-sm"
              variant="outline"
              onClick={() => handleButtonClick('Sign Up')}
            />
            <Button
              title="Try Free"
              size="small"
              shape="rounded-md"
              variant="primary"
              onClick={() => handleButtonClick('Try Free')}
            />
          </div>
        </section>

        {/* Disabled State Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">Disabled States</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              title="Disabled Primary"
              size="medium"
              shape="rounded-md"
              variant="primary"
              disabled={true}
            />
            <Button
              title="Disabled Secondary"
              size="medium"
              shape="rounded-md"
              variant="secondary"
              disabled={true}
            />
            <Button
              title="Disabled Outline"
              size="medium"
              shape="rounded-md"
              variant="outline"
              disabled={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;